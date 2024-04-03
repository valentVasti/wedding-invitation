import React, { useEffect, useRef } from 'react'
import basePatternSvg from '../assets/image/base-pattern.svg'
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
        <div ref={container} className='bg-black-palette w-full h-80 flex flex-col justify-center items-center relative gap-3 overflow-hidden'>
            <div ref={quotes} className='w-[1000px] text-center h-fit flex flex-col justify-center items-center gap-5 tracking-wide text-4xl text-white-palette z-10 font-serif will-change-transform'>
                <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt sit repudiandae esse tempora placeat minus similique obcaecati doloribus aut."</div>
            </div>
            <img ref={basePattern} src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0 will-change-transform' />
            <img ref={patternLeft} src={miniQuotesPattern} className='size-96 transform scale-[-1] object-cover absolute -top-3 -left-20 z-0 will-change-transform' />
            <img ref={patternRight} src={miniQuotesPattern} className='size-96 transform object-cover absolute -bottom-3 -right-20 z-0 will-change-transform' />
        </div>
    )
}

export default QuotesSection