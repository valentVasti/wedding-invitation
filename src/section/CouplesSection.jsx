import React, { useState } from 'react'
import RingLogo from '../assets/image/ring-logo.jpg'
import YellowFlower from '../assets/image/flower-pattern-yellow.svg'
import leo from '../assets/image/prewed/leo.jpg'
import wening from '../assets/image/prewed/wening.jpg'
import landingImage from '../assets/image/landing-img-2.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import VersesSection from './VersesSection';
import AnimatePattern from '../components/AnimatePattern'
import AnimateLoveOneLine from '../components/AnimateLoveOneLine'

const CouplesSection = () => {
    const couple1 = useRef(null)
    const couple2 = useRef(null)
    const container = useRef(null)
    const verse = useRef(null)
    const pattern1 = useRef(null)
    const pattern2 = useRef(null)
    const animatePattern1Container = useRef(null)
    const animatePattern2Container = useRef(null)
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

        tl.fromTo(animatePattern2Container.current, { opacity: 0 }, {
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
        pattern1.current.handleShow()
        pattern2.current.handleShow()
        pattern1.current.playAnimation()
        pattern2.current.playAnimation()
    }

    const handleLoveOneLineAnimation = () => {
        console.log('love one line')
        animateLoveOneLine.current.playAnimation()
        animateLoveOneLine.current.handleShow()
    }

    useEffect(() => {
        var tl = gsap.timeline({ onStart: handleStartAnimation, onComplete:handleLoveOneLineAnimation, scrollTrigger: { trigger: container.current, start: 'top center', end: 'bottom center' } });
        tl.add(verseAnimation())
        tl.add(coupleAnimation(), '>')
    }, []);

    return (
        <section className='w-full flex flex-col h-screen '>
            <div className='h-52'>
                <div ref={verse} className='w-full h-full flex justify-center items-center text-left will-change-transform'>
                    <div className='flex flex-col gap-6'>
                        <i className='text-2xl font-serif text-center'>{`"${verseText}"`}</i>
                        <p className='text-2xl font-yustine text-center'>{bible}</p>
                    </div>
                </div>
            </div>
            <div ref={container} className='flex justify-center items-center text-center h-5/6 py-10 relative'>
                <div ref={couple1} id="couple-1" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif z-10 will-change-transform">
                    <img src={wening} className='object-cover rounded-full size-80 mb-8 shadow-2xl' />
                    <div className='text-4xl text-center'>Eugenia Tyaswening Kristiasancti</div>
                    <hr className='border-black-palette w-64' />
                    <div className="">Putri dari Andreas Wahyu Krisdiarto & Ibu Maria Titi Purwaningsih</div>
                </div>
                <div ref={animatePattern1Container} id="and-sign" className="absolute -top-[120px] -right-16 size-[300px] scale-y-[-1] text-9xl font-[script] flex justify-center items-center z-0">
                    <AnimatePattern key={'pattern1'} ref={pattern1} />
                </div>
                <div className="absolute size-[500px] text-9xl flex justify-center items-center z-0 top-0">
                    <AnimateLoveOneLine key={'loveOneLine'} ref={animateLoveOneLine}/>
                </div>
                <div ref={animatePattern2Container} id="and-sign" className="absolute -top-[120px] -left-16 scale-x-[-1] scale-y-[-1] size-[300px] text-9xl font-[script] flex justify-center items-center z-0">
                    <AnimatePattern key={'pattern2'} ref={pattern2} />
                </div>
                <div ref={couple2} id="couple-2" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif z-10 will-change-transform">
                    <img src={leo} className='object-cover rounded-full size-80 mb-8 scale-x-[-1] shadow-2xl' />
                    <div className='text-4xl'>Leonardus Firstanto Padmatirta</div>
                    <hr className='border-black-palette w-64' />
                    <div className="">Putra dari Yoseph Arie Sixtioso L & Ibu Margaretha Padmi Rahayu</div>
                </div>
            </div>
        </section>
    )
}

export default CouplesSection