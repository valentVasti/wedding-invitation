import React, { useEffect, useRef } from 'react'
import basePatternSvg from '../assets/image/base-pattern-white.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const QuotesSection = () => {
    const container = useRef(null)
    const patternRight = useRef(null)
    const patternLeft = useRef(null)
    const basePattern = useRef(null)
    const quotes = useRef(null)

    useEffect(() => {
        gsap.fromTo(patternLeft.current,
            { y: -400, x: -200, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, x: 0, duration: 2, ease: 'sine.inOut'
            });

        gsap.fromTo(patternRight.current,
            { y: 400, x: 200, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, x: 0, duration: 2, ease: 'sine.inOut'
            });

        gsap.fromTo(basePattern.current,
            { scale: 1.15, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                }, scale: 1, opacity: 1, duration: 3, ease: 'sine.inOut'
            });
        gsap.fromTo(quotes.current,
            { y: -50, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                }, y: 0, opacity: 1, duration: 2, ease: 'sine.inOut'
            });
    }, []);

    return (
        <section ref={container} className='bg-white w-full h-36 md:h-52 lg:h-80 flex flex-col justify-center items-center relative gap-3 overflow-hidden my-16'>
            <div ref={quotes} className='w-[250px] md:w-[600px]  lg:w-[900px] text-center h-full flex flex-col justify-center items-center gap-5 tracking-wide text-xs z-10 font-serif will-change-transform md:text-xl lg:text-3xl '>
                <div>"Tuhan membuat segala sesuatu indah pada waktu-Nya. Indah saat Ia mempertemukan, indah saat Ia menumbuhkan kasih, dan indah saat Ia menpersatukan putra-putri kami dalam ikatan pernikahan kudus."</div>
            </div>
            <img ref={basePattern} src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0 will-change-transform transform' />
            <img ref={patternLeft} src={miniQuotesPattern} className='size-28 md:size-44 lg:size-96 transform scale-[-1] md:object-cover absolute -left-8 md:-left-20 z-0 will-change-transform' />
            <img ref={patternRight} src={miniQuotesPattern} className='size-28 md:size-44 lg:size-96 transform md:object-cover absolute -right-8 md:-right-20 z-0 will-change-transform' />
        </section>
    )
}

export default QuotesSection