import React, { useEffect, useRef } from 'react'
import flower from '../assets/image/flower-white.png'
import TimelineItem from '../components/TimelineItem.jsx'
import MainTimelineItem from '../components/MainTimelineItem.jsx'
import basePatternSvgWhite from '../assets/image/base-pattern-white.svg'
import basePatternSvgBlack from '../assets/image/base-pattern-white.svg'
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
import gsap from 'gsap'

const TimelineSection = () => {
    const left1 = useRef(null)
    const left2 = useRef(null)
    const left3 = useRef(null)
    const right1 = useRef(null)
    const right2 = useRef(null)
    const right3 = useRef(null)
    const event1 = useRef(null)
    const event2 = useRef(null)
    const event3 = useRef(null)
    const container = useRef(null)

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
            "date": "14 Juni 2024",
            "time": "15:00 WIB",
            "location": "Djenak, Yogyakarta",
            "icon": gunungan
        },
        {
            "action": "Sakramen",
            "date": "15 Juni 2024",
            "time": "13:00 WIB",
            "location": "Gereja Kumetiran",
            "icon": weddingChurch
        },
        {
            "action": "Resepsi",
            "date": "15 Juni 2024",
            "time": "18:00 WIB",
            "location": "Adyatma",
            "icon": doubleRing
        }
    ]

    useEffect(() => {
        gsap.fromTo(left1.current,
            { x: -150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
            });
        gsap.fromTo(left2.current,
            { x: -150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut', delay: 0.5
            });
        gsap.fromTo(left3.current,
            { x: -150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut', delay: 1.5
            });

        gsap.fromTo(right1.current,
            { x: 150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut'
            });
        gsap.fromTo(right2.current,
            { x: 150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut', delay: 0.5
            });
        gsap.fromTo(right3.current,
            { x: 150, opacity: 0 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, duration: 2, ease: 'sine.inOut', delay: 1
            });

        gsap.fromTo(event1.current,
            { opacity: 0, y: 50 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, y: 0, duration: 2, ease: 'sine.inOut'
            });
        gsap.fromTo(event2.current,
            { opacity: 0, y: 50 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, y: 0, duration: 2, ease: 'sine.inOut', delay:0.5
            });
        gsap.fromTo(event3.current,
            { opacity: 0, y: 50 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, y: 0, duration: 2, ease: 'sine.inOut', delay:1
            });
    }, [])

    return (
        <section ref={container} className='w-full h-screen text-center flex flex-col justify-center items-center bg-black mb-20'>
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
            <div className='w-full h-full relative bg-red-200'>
                <div className='bg-white w-full h-full relative flex flex-col items-center overflow-hidden text-black'>
                    {mainData.map((data, index) => (
                        <div key={data.action} ref={index + 1 == 1 ? event1 : index + 1 == 2 ? event2 : index + 1 == 3 ? event3 : null} className='flex flex-col justify-center items-center h-1/3 w-full relative z-10'>
                            {/* <div id='date' className='font-serif relative z-10 h-1/2 flex items-center justify-left'>
                                <img src={data.icon} className='size-[70px]' />
                            </div> */}
                            <div id='action' className='text-7xl relative z-10 flex flex-col gap-3 w-full justify-center items-center h-1/2 font-quicksand'>
                                <div id='action' className='text-4xl lg:text-6xl font-autography relative z-10 h-1/3 flex items-center'>{data.action}</div>
                                <div id='date' className='text-lg lg:text-xl relative z-10 h-1/5 flex items-center'><FaCalendar className='me-2' />{data.date}</div>
                                <div id='date' className='text-lg lg:text-xl relative z-10 h-1/5 flex items-center'><IoIosTime className='me-2' />{data.time}</div>
                                <div id='date' className='text-lg lg:text-xl relative z-10 h-1/5 flex items-center'><FaLocationDot className='me-2' />{data.location}</div>
                            </div>
                        </div>
                    ))}
                    <img src={basePatternSvgBlack} className='absolute top-0 h-full w-full object-cover z-0' />
                    {/* <div className='w-1 h-full absolute bg-white'></div> */}

                    {/* left */}
                    <img ref={left1} src={miniQuotesPattern} className='lg:hidden h-[250px] transform scale-[-1] object-cover absolute top-0 lg:translate-y-0 -left-24 z-0 will-change-transform' />
                    <img ref={left2} src={miniQuotesPattern} className='h-[250px] lg:h-[700px] transform scale-[-1] object-cover absolute top-1/2 -translate-y-1/2 lg:-top-3 lg:translate-y-0 -left-24 lg:-left-28 z-0 will-change-transform' />
                    <img ref={left3} src={miniQuotesPattern} className='lg:hidden h-[250px] transform scale-[-1] object-cover absolute bottom-0 -left-24 lg:-left-28 z-0 will-change-transform' />

                    {/* right */}
                    <img ref={right1} src={miniQuotesPattern} className='lg:hidden h-[250px] transform scale-y-[-1] object-cover absolute top-0 lg:-bottom-3 -right-24 z-0 will-change-transform' />
                    <img ref={right2} src={miniQuotesPattern} className='h-[250px] lg:h-[700px] transform scale-y-[-1] lg:scale-100 object-cover absolute bottom-1/2 translate-y-1/2 lg:-bottom-3 lg:translate-y-0 -right-24 lg:-right-28 z-0 will-change-transform' />
                    <img ref={right3} src={miniQuotesPattern} className='lg:hidden h-[250px] transform scale-y-[-1] object-cover absolute bottom-0 lg:translate-y-0 -right-24 z-0 will-change-transform' />

                </div>
                {/* <div className='absolute top-0 h-fit w-full bg-transparent flex justify-center items-center z-30'>
                    <div className='absolute -top-16 size-32 bg-yellow-palette rounded-full p-2 z-30 border-[10px] border-white '>
                        <img src={flower} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default TimelineSection