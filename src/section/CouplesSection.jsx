import React from 'react'
import RingLogo from '../assets/image/ring-logo.jpg'
import YellowFlower from '../assets/image/flower-pattern-yellow.svg'
import landingImage from '../assets/image/landing-img-2.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const CouplesSection = () => {
    const couple1 = useRef(null)
    const couple2 = useRef(null)
    const container = useRef(null)
    const andSign = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(couple1.current, { x: -500, opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
        });
        gsap.fromTo(couple2.current, { x: 500, opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
        });
    }, []);

    return (
        <div ref={container} className='flex justify-center items-center text-center h-auto py-10'>
            <div ref={couple1} id="couple-1" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif">
                <img src={landingImage} className='object-cover rounded-full size-80 mb-8' />
                <div className='text-4xl text-center'>Eugenia Tyaswening Kristiasancti</div>
                <hr className='border-black-palette w-64' />
                <div className="">Putri dari Andreas Wahyu Krisdiarto & Ibu Maria Titi Purwaningsih</div>
            </div>
            <div id="and-sign" className="h-fit w-1/5 text-9xl font-[script] flex justify-center items-center">
                <img src={YellowFlower} className='object-cover size-44' />
            </div>
            <div ref={couple2} id="couple-2" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif">
                <img src={landingImage} className='object-cover rounded-full size-80 mb-8' />
                <div className='text-4xl'>Leonardus Firstanto Padmatirta</div>
                <hr className='border-black-palette w-64' />
                <div className="">Putra dari Yoseph Arie Sixtioso L & Ibu Margaretha Padmi Rahayu</div>
            </div>
        </div>
    )
}

export default CouplesSection