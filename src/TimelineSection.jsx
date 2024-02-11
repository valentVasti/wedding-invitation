import React from 'react'
import flower from './assets/image/flower-white.png'
import TimelineItem from './components/TimelineItem.jsx'
import basePatternSvgWhite from './assets/image/base-pattern-white.svg'
import basePatternSvgBlack from './assets/image/base-pattern.svg'
import timelineImg from './assets/image/timeline-img.jpg'

const TimelineSection = () => {
    const data = [
        {
            "position": "left",
            "action": "First Meet",
            "date": "2010",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, enim?"
        },
        {
            "position": "right",
            "action": "Jadian",
            "date": "2015",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, enim?"
        },
        {
            "position": "left",
            "action": "She said Yes!",
            "date": "2023",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, enim?"
        },
    ]

    data.map((data) => console.log(data.position));

    return (
        <div className='w-full h-auto text-center py-10 flex flex-col justify-center items-center bg-white'>
            <h1 className='text-7xl font-serif mb-20 text-black'>Our Story</h1>
            <div className='flex flex-col justify-center items-center h-auto w-[1400px]'>
                <div className='size-16 bg-yellow-palette rounded-full p-2'>
                    <img src={flower} />
                </div>
                <div className='w-2 h-40 bg-yellow-palette'></div>
                {data.map((data) => (
                    <TimelineItem storyPosition={data.position} action={data.action} date={data.date} desc={data.desc} />
                ))}
                <div className='w-2 h-40 bg-yellow-palette'></div>

                <div className='w-full h-96 flex relative gap-10'>
                    <div className='h-full w-full bg-yellow-palette relative'>
                        <div className='absolute z-20 size-full font-serif text-left flex flex-col justify-center items-center gap-5 text-white pt-14 p-10 overflow-hidden'>
                            <div className='bg-black-palette w-full h-full relative flex flex-col justify-evenly items-center'>
                                <div id='action' className='text-8xl font-tiramisu relative z-10'>a</div>
                                <div id='date' className='text-6xl font-serif relative z-10'>a</div>
                                <div id='desc' className='relative z-10'>a</div>
                                <img src={basePatternSvgBlack} className='absolute top-0 h-full w-full object-cover z-0 opacity-70' />
                            </div>
                        </div>
                        <div className='absolute top-0 h-full w-full bg-transparent flex justify-center items-center z-30'>
                            <div className='absolute -top-10 size-20 bg-yellow-palette rounded-full p-2 z-30 border-[10px] border-white '>
                                <img src={flower} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimelineSection