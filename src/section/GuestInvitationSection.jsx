import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import basePatternSvg from '../assets/image/base-pattern-white.svg'
import QuotesSection from '../section/QuotesSection'
import birds from '../assets/image/birds.png'
import gsap from 'gsap'

const GuestInvitationSection = forwardRef((props, ref) => {
    const container = useRef(null)   
    
    const handleButtonClick = () => {
        console.log('clicked')
        const screenHeight = window.innerHeight
        const screenWidth = window.innerWidth
        
        // const openAnimation = gsap.to(container.current, {
        //     height: screenHeight, width: screenWidth, duration: 1, ease: 'sine.inOut', borderRadius: 0,
        // })

        // const closeAnimation = gsap.to(container.current, {
        //     display: 'none', duration: 1, ease: 'sine.inOut'
        // })

        const timeline = gsap.timeline()

        timeline.to(container.current, {
            height: screenHeight, width: screenWidth, duration: 1, ease: 'sine.inOut', borderRadius: 0,
        })

        timeline.to(container.current, {
            opacity: 0, duration: 1, ease: 'sine.inOut'
        })

        // timeline.play(true)
    }

    useImperativeHandle(ref, () => ({
        handleButtonClick
    }))

    return (
        <div ref={container} className='p-2 pt-8 md:pt-12 md:pb-6 gap-2 w-[70%] h-[190px] md:w-[450px] md:h-72 rounded-3xl text-center text-sm md:text-xl lg:text-sm flex flex-col justify-center items-center bg-white-palette text-black-palette font-quicksand overflow-hidden will-change-transform z-10 shadow-xl'>
            <p className='z-10 relative w-[200px] md:w-[450px] text-sm md:text-2xl'>Yth. Nama Tamu <br /> <span className='text-xs md:text-lg'>Kami mengundang  <br /> Bapak/Ibu/Saudara <br /> untuk menghadiri perayaan <br /> pernikahan kami</span></p>
            <img src={birds} className='font-bold text-xl h-6 md:h-11 object-cover'/>
        </div>
    )
});

export default GuestInvitationSection