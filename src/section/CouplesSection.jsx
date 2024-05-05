import React, { useState } from 'react'
import RingLogo from '../assets/image/ring-logo.jpg'
import YellowFlower from '../assets/image/flower-pattern-yellow.svg'
import leo from '../assets/image/prewed/leo-2.png'
import wening from '../assets/image/prewed/wening-3.jpg'
import landingImage from '../assets/image/landing-img-2.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import VersesSection from './VersesSection';
import AnimatePattern from '../components/AnimatePattern'
import AnimateLoveOneLine from '../components/AnimateLoveOneLine'
import basePatternSvgWhite from '../assets/image/base-pattern-white.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'

const CouplesSection = () => {
    const couple1 = useRef(null)
    const couple2 = useRef(null)
    const container = useRef(null)
    const verse = useRef(null)
    const pattern1 = useRef(null)
    const pattern2 = useRef(null)
    const pattern3 = useRef(null)
    const pattern4 = useRef(null)
    const background = useRef(null)
    const animatePattern1Container = useRef(null)
    const animatePattern2Container = useRef(null)
    const animatePattern3Container = useRef(null)
    const animatePattern4Container = useRef(null)
    const animateLoveOneLine = useRef(null)
    const verseText = "Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan"
    const bible = "Kolose 3:14"


    gsap.registerPlugin(ScrollTrigger);

    const verseAnimation = () => {
        const tl = gsap.timeline()
        tl.fromTo(verse.current, { y: -50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 2, ease: 'sine.inOut'
        })

        tl.fromTo(animatePattern1Container.current, { opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 1, ease: 'sine.inOut'
        });

        tl.fromTo(animatePattern3Container.current, { opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 1, ease: 'sine.inOut'
        });

        tl.fromTo(animatePattern2Container.current, { opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 2, ease: 'sine.inOut'
        });

        tl.fromTo(animatePattern4Container.current, { opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 2, ease: 'sine.inOut'
        });
        return tl
    };

    const coupleAnimation = () => {
        const tl = gsap.timeline()

        tl.fromTo(couple1.current, { x: -500, opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
        });

        tl.fromTo(couple2.current, { x: 500, opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
        });

        return tl
    }

    const handleStartAnimation = () => {
        // pattern1.current.handleShow()
        // pattern2.current.handleShow()
        // pattern3.current.handleShow()
        // pattern4.current.handleShow()
        // pattern1.current.playAnimation()
        // pattern2.current.playAnimation()
        // pattern3.current.playAnimation()
        // pattern4.current.playAnimation()
    }

    useEffect(() => {
        var tl = gsap.timeline({ onStart: handleStartAnimation, scrollTrigger: { trigger: container.current, start: 'top center', end: 'bottom center' } });
        tl.add(verseAnimation())
        tl.add(coupleAnimation(), '>')
    }, []);

    return (
        <section className='w-full flex flex-col h-screen relative overflow-hidden'>
            <div className='h-[20%] z-10'>
                <div ref={verse} className='w-full h-full flex justify-center items-center text-left will-change-transform'>
                    <div className='flex flex-col gap-6'>
                        <i className='md:text-xl lg:text-2xl font-serif text-center'>{`"${verseText}"`}</i>
                        <p className='md:text-2xl lg:text-4xl font-yustine text-center text-yellow-palette'>{bible}</p>
                    </div>
                </div>
            </div>
            <div ref={container} className='flex flex-col lg:flex-row justify-center items-center text-center gap-10 lg:gap-0 h-[80%] lg:py-10 relative z-10'>
                <div ref={couple1} id="couple-1" className="lg:h-fit h-1/2 w-full flex flex-col justify-center items-center gap-2 lg:gap-4 font-serif z-20 will-change-transform overflow-hidden">
                    <img src={wening} className='object-cover rounded-full size-44 md:size-52 lg:size-80 md:mb-3 lg:mb-8 shadow-2xl' />
                    <div className='w-full h-1/3 flex flex-col justify-center items-center gap-1'>
                        <div className='text-md md:text-3xl lg:text-3xl text-center'>Eugenia Tyaswening Kristiasancti,  S.Pt., MBA</div>
                        <hr className='border-yellow-palette w-44 md:w-64' />
                        <div className="text-xs md:text-sm lg:text-lg">Putri Pertama <br />Bapak Dr. Ir. Andreas Wahyu Krisdiarto, M. Eng dan <br/>Ibu Dra. Maria Titi Purwaningsih</div>
                    </div>
                </div>
                <div ref={animatePattern1Container} id="pattern1" className="absolute top-0 md:top-10 lg:-top-[120px] -right-28 md:-right-16 size-[200px] md:size-[250px] lg:size-[300px] scale-y-[-1] flex justify-center items-center z-10">
                    {/* <AnimatePattern key={'pattern1'} ref={pattern1} /> */}
                    <img src={miniQuotesPattern} ref={pattern1} className='size-full'/>
                </div>
                <div ref={animatePattern3Container} id="pattern3" className="lg:hidden top-72 absolute md:top-96 lg:-top-[120px] -right-28 md:-right-16 size-[200px] md:size-[250px] lg:size-[300px] flex justify-center items-center z-10">
                    {/* <AnimatePattern key={'pattern3'} ref={pattern3} /> */}
                    <img src={miniQuotesPattern} ref={pattern3} className='size-full'/>

                </div>
                {/* <div className="absolute hidden lg:flex lg:size-[500px] justify-center items-center z-0 md:top-36 lg:top-0">
                    <AnimateLoveOneLine key={'loveOneLine'} ref={animateLoveOneLine} />
                </div> */}
                <div ref={animatePattern2Container} id="pattern2" className="absolute top-0 md:top-10 lg:-top-[120px] -left-28 md:-left-16 scale-x-[-1] scale-y-[-1] size-[200px] md:size-[250px] lg:size-[300px] flex justify-center items-center z-10">
                    {/* <AnimatePattern key={'pattern2'} ref={pattern2} /> */}
                    <img src={miniQuotesPattern} ref={pattern2} className='size-full'/>

                </div>
                <div ref={animatePattern4Container} id="pattern4" className="lg:hidden top-72 absolute md:top-96 lg:-top-[120px] -left-28 md:-left-16 scale-x-[-1] scale-y-[1] size-[200px] md:size-[250px] lg:size-[300px] flex justify-center items-center z-10">
                    {/* <AnimatePattern key={'pattern4'} ref={pattern4} /> */}
                    <img src={miniQuotesPattern} ref={pattern4} className='size-full'/>

                </div>
                <div ref={couple2} id="couple-2" className="lg:h-fit h-1/2 w-full flex flex-col justify-center items-center gap-2 lg:gap-4 font-serif z-20 will-change-transform">
                    <img src={leo} className='object-cover rounded-full size-44 md:size-52 lg:size-80 md:mb-3 lg:mb-8 shadow-2xl' />
                    <div className='w-full h-1/3 flex flex-col justify-center items-center gap-1'>
                        <div className='text-md md:text-3xl lg:text-3xl text-center'>Leonardus Firstanto Padmatirta, S.Fil</div>
                        <hr className='border-yellow-palette w-44 md:w-64' />
                        <div className="text-xs md:text-sm lg:text-lg">Putra Pertama <br />Bapak Yoseph Arie Sixtioso L dan <br/> Ibu Margaretha Padmi Rahayu</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CouplesSection