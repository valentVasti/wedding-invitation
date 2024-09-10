import React, { Component, useEffect, useRef, useState } from 'react'
import HeroSection from './section/HeroSection'
import CouplesSection from './section/CouplesSection'
import QuotesSection from './section/QuotesSection'
import GuestInvitationSection from './section/GuestInvitationSection'
import TimelineSection from './section/TimelineSection'
import gsap from 'gsap'
import { FaArrowRight } from 'react-icons/fa'
import HopeSection from './section/HopeSection'
import { useParams } from 'react-router-dom'
import { useStore } from './store'

const MainComponent = () => {
    return (
        <>
            <HeroSection />
            <CouplesSection />
            <TimelineSection />
            <HopeSection />
        </>
    )
}

const DynamicComponent = ({ children }) => {
    return children
}

const MainLayout = () => {
    const slug = useParams().slug
    console.log(slug)

    const [disabledOpenButton, setDisabledOpenButton] = useState(false)
    const [disabledNextButton, setDisabledNextButton] = useState(true)
    // const [guestData, setGuestData] = useState({})
    const guestInvitation = useRef(null)
    const quotes = useRef(null)
    const openButton = useRef(null)
    const mainContainer = useRef(null)
    const nextButton = useRef(null)
    const coupleLogo = useRef(null)
    const [dynamicComponent, setDynamicComponent] = useState(<GuestInvitationSection ref={guestInvitation} />)
    const setGuestData = useStore((state) => state.setGuestData)
    const guestData = useStore((state) => state.guestData)

    console.log(guestData)

    const fetchGuestData = async () => {
        try {
            const response = await fetch('https://rovyoso.sga.dom.my.id/api/guest/' + slug)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            console.log(result)
            setGuestData(result.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchGuestData()
    }, [])

    const handleOpenInvitation = () => {
        guestInvitation.current.handleButtonClick()

        gsap.to(openButton.current, {
            opacity: 0, duration: 1, ease: 'sine.inOut', zIndex: 0
        })

        gsap.to(coupleLogo.current, {
            opacity: 0, duration: 1, ease: 'sine.inOut', delay: 1, zIndex: 0
        })

        setDisabledOpenButton(true)

        gsap.to(mainContainer.current, {
            backgroundColor: 'white', duration: 1, ease: 'sine.inOut'
        })

        setTimeout(() => {
            setDynamicComponent(<QuotesSection ref={quotes} />)
        }, 2000)

        setDisabledNextButton(false)
        gsap.to(nextButton.current, {
            opacity: 1, duration: 1, ease: 'sine.inOut', delay: 6, zIndex: 30
        })
    }

    const handleNextAction = () => {
        quotes.current.handleDissapear()

        setTimeout(() => {
            setDynamicComponent(<MainComponent />)
        }, 1500)

        gsap.to(nextButton.current, {
            opacity: 0, duration: 1, ease: 'sine.inOut', zIndex: 0
        })
        setDisabledNextButton(true)
    }


    return (
        <section ref={mainContainer} className='w-full min-h-screen max-h-auto flex flex-col justify-center items-center relative bg-black-palette'>
            <DynamicComponent children={dynamicComponent} />
            <button disabled={disabledOpenButton} ref={openButton} className='font-quicksand opacity-100 z-20 w-fit h-fit rounded-full py-2 px-3 bg-white-palette fixed left-1/2 bottom-[20%] -translate-x-1/2' onClick={handleOpenInvitation}>Buka Undangan</button>
            <button disabled={disabledNextButton} ref={nextButton} className='opacity-0 z-10 rounded-full py-2 px-3 bg-yellow-palette fixed left-1/2 bottom-[20%] -translate-x-1/2 size-10 flex justify-center items-center shadow-xl text-white' onClick={handleNextAction}><FaArrowRight /></button>
            <div ref={coupleLogo} className='opacity-100 z-20 size-16 md:size-20 flex justify-center items-center rounded-full py-2 px-3 bg-yellow-palette fixed left-1/2 -translate-x-1/2 top-[35%] md:top-[26%] md:text-xl shadow-xl text-white font-watermint gap-1'><span className='font-serif'>D</span>&<span className='font-serif'>D</span></div>
        </section>
    )
}

export default MainLayout