import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import basePatternSvg from '../assets/image/base-pattern-white.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const QuotesSection = forwardRef((props, ref) => {
    const container = useRef(null)
    const patternRightTop = useRef(null)
    const patternRightBottom = useRef(null)
    const patternLeftTop = useRef(null)
    const patternLeftBottom = useRef(null)
    const basePattern = useRef(null)
    const quotes = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    const handleDissapear = () => {
        gsap.to(container.current, {
            opacity: 0, duration: 1, ease: 'sine.inOut'
        })
    }

    useImperativeHandle(ref, () => ({
        handleDissapear
    }));

    useEffect(() => {
        gsap.fromTo(patternLeftTop.current,
            { y: -100, x: -200, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, x: 0, duration: 2, ease: 'sine.inOut'
            });

        gsap.fromTo(patternLeftBottom.current,
            { y: 100, x: -200, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, x: 0, duration: 2, ease: 'sine.inOut'
            });

        gsap.fromTo(patternRightTop.current,
            { y: -100, x: 200, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, x: 0, duration: 2, ease: 'sine.inOut'
            });

        gsap.fromTo(patternRightBottom.current,
            { y: 100, x: 200, opacity: 0 },
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
        <section ref={container} className='bg-white w-full h-screen md:h-52 lg:h-screen flex flex-col justify-center items-center relative gap-3 overflow-hidden'>
            <div ref={quotes} className='opacity-0 w-[250px] md:w-[600px] lg:w-[900px] text-center h-full flex flex-col justify-center items-center gap-5 tracking-wide text-2xl z-10 font-serif will-change-transform md:text-xl lg:text-5xl'>
                <div className='leading-tight'>"Tuhan membuat segala sesuatu indah pada waktu-Nya. Indah saat Ia mempertemukan, indah saat Ia menumbuhkan kasih, dan indah saat Ia mempersatukan putra-putri kami dalam ikatan pernikahan kudus."</div>
            </div>
            <img ref={basePattern} src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0 will-change-transform transform' />

            <img ref={patternRightTop} src={miniQuotesPattern} className='size-52 md:size-44 lg:size-96 transform md:object-cover absolute -right-8 md:-right-20 top-0 z-0 will-change-transform' />
            <img ref={patternRightBottom} src={miniQuotesPattern} className='size-52 md:size-44 lg:size-96 transform md:object-cover absolute -right-8 md:-right-20 scale-y-[-1] bottom-0 z-0 will-change-transform' />

            <img ref={patternLeftBottom} src={miniQuotesPattern} className='size-52 md:size-44 lg:size-96 transform scale-[-1] md:object-cover absolute -left-8 md:-left-20 bottom-0 z-0 will-change-transform' />
            <img ref={patternLeftTop} src={miniQuotesPattern} className='size-52 md:size-44 lg:size-96 transform md:object-cover absolute -left-8 md:-left-20 scale-x-[-1] top-0 z-0 will-change-transform' />
        </section>
    )
});

export default QuotesSection