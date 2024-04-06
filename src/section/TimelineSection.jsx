import React from 'react'
import flower from '../assets/image/flower-white.png'
import TimelineItem from '../components/TimelineItem.jsx'
import MainTimelineItem from '../components/MainTimelineItem.jsx'
import basePatternSvgWhite from '../assets/image/base-pattern-white.svg'
import basePatternSvgBlack from '../assets/image/base-pattern.svg'
import timelineImg from '../assets/image/timeline-img.jpg'
import suit from '../assets/image/suit-white.png'
import church from '../assets/image/church-white.png'
import framePhoto from '../assets/image/frame-photo-2.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'
import gunungan from '../assets/image/gunungan.svg'
import weddingChurch from '../assets/image/wedding-church-icon.svg'
import doubleRing from '../assets/image/double-ring.svg'
import { FaCalendar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const TimelineSection = () => {
    const data = [
        {
            "position": "left",
            "action": "Perkenalan",
            "date": "2007",
            "desc": "Sebuah awal biasa, sama seperti pertemuan-pertemuan lainnya. Terlewat begitu saja tanpa tahu inilah pembuka yang nanti ada dalam cerita."
        },
        {
            "position": "right",
            "action": "Bersama",
            "date": "2015",
            "desc": "Sepakat berdua, melanjutkan bahagia kita yang bentuknya masih diraba-raba. Selama bertambah usia, mempercayai bahwa dengan bersama maka masing-masing akan diberi yang terbaik yang bisa ditawarkan hidup, salah satunya semoga satu sama lain."
        },
        {
            "position": "left",
            "action": "Saling Memilih",
            "date": "2023",
            "desc": "Satu dekade penuh rupa membawa kesadaran bahwa sebenarnya setiap hari sudah memilih untuk terus bersama, tetap mengiyakan segala yang diberi semesta karena di dalamnya ada kita. Terima kasih sudah membantu membuka pintu-pintu dengan kunci ciptaan sendiri. Setelah ini, ada makna baru dalam ikatan. Setelah ini, cinta itu sendiri yang menjadi permulaan, perjalanan, serta batas menggenapi."
        },
    ]

    const mainData = [
        {
            "action": "Siraman",
            "date": "14 Juni 2024 | 15.00 WIB",
            "location": "Jenak, Yogyakarta"
        },
        {
            "action": "Sakramen",
            "date": "15 Juni 2024 14.00 WIB",
            "location": "Gereja Hati St Perawan Maria Tak Bercela Kumetiran, Yogyakarta"
        }
    ]

    data.map((data) => console.log(data.position));

    return (
        <section className='w-full h-auto text-center py-10 flex flex-col justify-center items-center'>
            {/* <div className='flex flex-col justify-center items-center h-auto w-[1400px]'>
                <div className='size-16 bg-yellow-palette rounded-full p-2'>
                    <img src={flower} />
                </div>
                <div className='w-2 h-40 bg-yellow-palette'></div>
                {data.map((data) => (
                    <TimelineItem storyPosition={data.position} action={data.action} date={data.date} desc={data.desc} />
                ))}
            </div> */}
            {/* <div className='w-2 h-44 bg-yellow-palette'></div> */}
            <div className='w-full h-auto relative'>
                <div className='bg-black-palette w-full h-auto relative flex flex-col justify-evenly items-center p-10 pb-24 overflow-hidden text-white pt-28 gap-28'>
                    <div className='flex justify-evenly items-end h-[200px] w-[1000px] gap-24 relative'>
                        <div id='action' className='text-7xl font-autography relative z-10 w-1/2 flex flex-col items-end justify-center h-full text-right'>
                            <div id='action' className='text-6xl font-autography relative z-10 h-1/3 flex items-center'>Siraman</div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>14 Juni 2024<FaCalendar className='ms-2' /></div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>15.00 WIB<IoIosTime className='ms-2' /></div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>Jenak, Yogyakarta<FaLocationDot className='ms-2' /></div>
                        </div>
                        <div id='date' className='text-3xl font-serif relative z-10 w-1/2 h-full flex items-center justify-left'>
                            <img src={gunungan} className='h-full' />
                        </div>
                        <div className='h-full w-full absolute top-0 flex justify-center items-center'>
                            <div className='size-8 z-10 bg-white rounded-full top-1/2 bottom-1/2'></div>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-end h-[200px] w-[1000px] gap-24 relative'>
                        <div id='date' className='text-3xl font-serif relative z-10 w-1/2 h-full flex items-center justify-end'>
                            <img src={weddingChurch} className='h-[170px]' />
                        </div>
                        <div id='action' className='text-7xl font-autography relative z-10 w-1/2 flex flex-col items-start justify-center h-full'>
                            <div id='action' className='text-6xl font-autography relative z-10 h-1/3 flex items-center text-left'>Sakramen</div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'><FaCalendar className='me-2' />14 Juni 2024</div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'><IoIosTime className='me-2' />15.00 WIB</div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'><FaLocationDot className='me-2' />Jenak, Yogyakarta</div>
                        </div>
                        <div className='h-full w-full absolute top-0 flex justify-center items-center'>
                            <div className='size-8 z-10 bg-white rounded-full top-1/2 bottom-1/2'></div>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-end h-[200px] w-[1000px] gap-24 relative'>
                        <div id='action' className='text-7xl font-autography relative z-10 w-1/2 flex flex-col items-end justify-center h-full text-right'>
                            <div id='action' className='text-6xl font-autography relative z-10 h-1/3 flex items-center'>Resepsi</div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>14 Juni 2024<FaCalendar className='ms-2' /></div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>15.00 WIB<IoIosTime className='ms-2' /></div>
                            <div id='date' className='text-xl font-serif relative z-10 h-1/5 flex items-center'>Jenak, Yogyakarta<FaLocationDot className='ms-2' /></div>                        </div>
                        <div id='date' className='text-3xl font-serif relative z-10 w-1/2 h-full flex items-center justify-left'>
                            <img src={doubleRing} className='h-[165px]' />
                        </div>
                        <div className='h-full w-full absolute top-0 flex justify-center items-center'>
                            <div className='size-8 z-10 bg-white rounded-full top-1/2 bottom-1/2'></div>
                        </div>
                    </div>

                    <img src={basePatternSvgBlack} className='absolute top-0 h-full w-full object-cover z-0 opacity-70' />
                    <div className='w-1 h-full absolute bg-white'></div>
                    <img src={miniQuotesPattern} className='h-[950px] transform scale-[-1] object-cover absolute -top-3 -left-60 z-0' />
                    <img src={miniQuotesPattern} className='h-[950px] transform object-cover absolute -bottom-3 -right-60 z-0' />

                    {/* <div className='absolute left-0 top-0 h-full w-96 flex flex-col justify-center items-center'>
                        <img src={timelineImg} className='size-full object-cover' />
                        <img src={timelineImg} className='size-full object-cover' />
                        <img src={timelineImg} className='size-full object-cover' />
                    </div>
                    <div className='absolute right-0 top-0 h-full w-96 flex flex-col justify-center items-center'>
                        <img src={timelineImg} className='size-full object-cover' />
                        <img src={timelineImg} className='size-full object-cover' />
                        <img src={timelineImg} className='size-full object-cover' />
                    </div> */}
                </div>
                <div className='absolute top-0 h-fit w-full bg-transparent flex justify-center items-center z-30'>
                    <div className='absolute -top-16 size-32 bg-yellow-palette rounded-full p-2 z-30 border-[10px] border-white '>
                        <img src={flower} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimelineSection