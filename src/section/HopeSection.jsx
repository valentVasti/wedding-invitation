import React, { useEffect, useRef } from 'react'
import hopeBg from '../assets/image/prewed/hope-bg.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const HopeSection = () => {
    const container = useRef(null)
    const background = useRef(null)
    const overlay = useRef(null)
    const text = useRef(null)

    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo(background.current, { opacity: 0, scale:1.15 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 2, ease: 'sine.inOut', scale:1
        });

        gsap.fromTo(text.current, { opacity: 0, y:50 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 1, duration: 1, ease: 'sine.inOut', delay: 1.6, y:0
        });

        gsap.fromTo(overlay.current, { opacity: 0 }, {
            scrollTrigger:
            {
                trigger: container.current,
                start: 'top center',
                end: 'bottom center'
            }, opacity: 0.5, duration: 2, ease: 'sine.inOut'
        });

        // gsap.fromTo(container.current, { background: 'white' }, {
        //     scrollTrigger:
        //     {
        //         trigger: container.current,
        //         start: 'top center',
        //         end: 'bottom center'
        //     }, background: 'black', duration: 2, ease: 'sine.inOut'
        // });
    }, [])

    return (
        <section ref={container} className='min-h-screen w-full relative z-0 overflow-hidden bg-black'>
            <div ref={text} className='opacity-0 relative z-20 text-white flex justify-center items-center flex-col top-44 md:top-32 will-change-transform'>
                <h1 className='text-3xl md:text-6xl font-lt-perfume text-center'>"Kehadiran dan doa restu Anda <br /> merupakan kebahagiaan bagi kami."</h1>
                <hr className='border-1 border-yellow-palette w-[85%] md:w-[45%] my-3' />
                <p className='font-quicksand text-xl md:text-3xl mt-3'>Wening & Leo</p>
                <div className='mt-5 font-quicksand text-xs md:text-sm space-y-1 text-center w-80 md:w-full'>
                    <p>Kami yang berbahagia</p>
                    <p>Kel. Bapak Dr. Ir. Andreas Wahyu Krisdiarto, M. Eng dan Ibu Dra. Maria Titi Purwaningsih</p>
                    <p>Kel. Bapak Yoseph Arie Sixtioso L dan Ibu Margaretha Padmi Rahayu</p>
                </div>
            </div>
            <div ref={overlay} className='opacity-0 bg-black size-full absolute top-0 left-0 z-10 will-change-transform'></div>
            <img ref={background} src={hopeBg} className='absolute top-0 left-0 z-0 w-full h-full object-cover opacity-0 will-change-transform' />
        </section>
    )
}

export default HopeSection