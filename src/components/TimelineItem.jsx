import React from 'react'
import flower from '../assets/image/flower-white.png'
import basePatternSvg from '../assets/image/base-pattern-white.svg'
import timelineImg from '../assets/image/timeline-img.jpg'

const TimelineItem = ({ storyPosition, action, date, desc }) => {

    return (
        <>
            <div className='w-full h-96 flex relative gap-10'>
                {storyPosition === "left" ? (
                    <>
                        <div className='h-full w-1/2 bg-white relative'>
                            <div className='size-full bg-transparent z-10 absolute px-20 font-serif text-right flex flex-col justify-center gap-5'>
                                <div id='action' className='text-8xl font-tiramisu text-black-palette'>{action}</div>
                                <div id='date' className='text-6xl font-serif'>{date}</div>
                                <div id='desc' >{desc}</div>
                            </div>
                            <img src={basePatternSvg} className='absolute top-0 h-full w-full object-cover z-0 opacity-70' />
                        </div>
                        <div className='h-full w-1/2'>
                            <img src={timelineImg} className='h-full w-full object-cover' />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='h-full w-1/2'>
                            <img src={timelineImg} className='h-full w-full object-cover' />
                        </div>
                        <div className='h-full w-1/2 bg-white relative'>
                            <div className='size-full bg-transparent z-10 absolute px-20 font-serif text-left flex flex-col justify-center gap-5'>
                                <div id='action' className='text-8xl font-tiramisu text-black-palette'>{action}</div>
                                <div id='date' className='text-6xl font-serif'>{date}</div>
                                <div id='desc' >{desc}</div>
                            </div>
                            <img src={basePatternSvg} className='absolute top-0 h-full w-full object-cover z-0 opacity-70' />
                        </div>
                    </>
                )}

                <div className='absolute h-full w-full bg-transparent flex justify-center items-center z-10'>
                    <div className='size-20 bg-yellow-palette rounded-full p-2 border-[10px] border-white z-30'>
                        <img src={flower}/>
                    </div>
                    <div className='absolute h-full w-full bg-transparent flex justify-center items-center z-20'>
                        <div className='w-2 h-full bg-yellow-palette'></div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default TimelineItem