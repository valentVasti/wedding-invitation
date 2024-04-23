import React from 'react'
import basePatternSvg from '../assets/image/base-pattern.svg'

const GuestInvitationSection = () => {
    return (
        <section className='relative w-full text-center min-h-40 text-sm md:text-xl lg:text-2xl flex justify-center items-center mb-16 bg-black-palette text-white-palette font-quicksand overflow-hidden'>
            <p className='z-10 relative'>Yth. Nama Tamu <br/> Kami mengundang Bapak/Ibu/Saudara untuk menghadiri perayaan pernikahan kami</p>
            <img src={basePatternSvg} className='size-full scale-[2.5] object-cover absolute top-0 z-0 will-change-transform transform' />
        </section>
    )
}

export default GuestInvitationSection