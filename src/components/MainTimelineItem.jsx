import React from 'react'
import flower from '../assets/image/flower-white.png'
import basePatternSvgBlack from '../assets/image/base-pattern.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'

const MainTimelineItem = ({action, date, location}) => {
    return (
        <>
            <div className='w-2 h-24 bg-yellow-palette'></div>
            <div className='w-full h-[350px] relative'>
                <div className='absolute z-20 w-full h-full font-serif text-left flex flex-col justify-center items-center gap-5 text-white pt-4 p-4 overflow-hidden'>
                    <div className='bg-black-palette w-full h-full relative flex flex-col justify-evenly items-center p-10 text-center overflow-hidden'>
                        <div id='action' className='text-7xl font-autography relative z-10'><span></span>{action}</div>
                        <div id='date' className='text-3xl font-serif relative z-10'>{date}</div>
                        <div id='desc' className='relative font-modern-sans z-10 text-xl'>{location}</div>
                        <img src={basePatternSvgBlack} className='absolute top-0 h-full w-full object-cover z-0 opacity-70' />
                        <img src={miniQuotesPattern} className='absolute top-0 left-0 h-[400px] -translate-x-11 -rotate-6 object-cover z-0 transform scale-[-1]' />
                        <img src={miniQuotesPattern} className='absolute top-0 right-0 h-[400px] translate-x-11 -rotate-6 object-cover z-0' />
                    </div>
                </div>
                <div className='absolute top-0 h-fit w-full bg-transparent flex justify-center items-center z-30'>
                    <div className='absolute -top-10 size-20 bg-yellow-palette rounded-full p-2 z-30 border-[10px] border-white '>
                        <img src={flower} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainTimelineItem