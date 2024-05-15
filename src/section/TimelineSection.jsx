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
import { FaArrowRight, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import gsap from 'gsap'
import { useStore } from '../store.jsx'

const TimelineSection = () => {
    const left1 = useRef(null)
    const left2 = useRef(null)
    const right1 = useRef(null)
    const right2 = useRef(null)
    const event1 = useRef(null)
    const event2 = useRef(null)
    const container = useRef(null)
    const note = useRef(null)
    const guestData = useStore((state) => state.guestData)

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

    let timeSession

    if (guestData.sesi == 1) {
        timeSession = '18:00 WIB'
    } else if (guestData.sesi == 2) {
        timeSession = '19:00 WIB'
    }

    const mainData = [
        {
            "action": "Sakramen Perkawinan",
            "date": "Sabtu, 15 Juni 2024",
            "time": "13:00 WIB",
            "location": "Gereja Katolik Hati Santa Perawan Maria tak Bercela Kumetiran",
            "address": "Jl. Kumetiran No.13, Pringgokusuman, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
            "maps": "https://maps.app.goo.gl/LTCUbnqAJqJ6QBuF8",
            "icon": weddingChurch
        },
        {
            "action": "Resepsi",
            "date": "Sabtu, 15 Juni 2024",
            "time": timeSession,
            "location": "Joglo Adyatma +50",
            "address": "Jl. Bunga Ilalang, Sidorejo, Tegal Onggobayan, RT 007, Ngestiharjo, Kasihan, Bantul, Daerah Istimewa Yogyakarta",
            "maps": "https://maps.app.goo.gl/WoEoenmDx63GHa6Y7",
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
                opacity: 1, x: 0, y: 0, duration: 2, ease: 'sine.inOut', delay: 0.5
            });

        gsap.fromTo(note.current,
            { opacity: 0, y: 50 },
            {
                scrollTrigger:
                {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center'
                },
                opacity: 1, x: 0, y: 0, duration: 2, ease: 'sine.inOut', delay: 0.5
            });
    }, [])

    return (
        <>
            <section ref={container} className='w-full h-screen text-center flex flex-col justify-center items-center bg-black relative'>
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
                    <div className='bg-white w-full h-full relative flex flex-col justify-center items-center overflow-hidden text-black gap-16'>
                        {mainData.map((data, index) => (
                            <div key={data.action} ref={index + 1 == 1 ? event1 : index + 1 == 2 ? event2 : null} className='flex flex-col justify-center items-center h-1/3 lg:h-fit w-full relative z-10'>
                                {/* <div id='date' className='font-serif relative z-10 h-1/2 flex items-center justify-left'>
                                <img src={data.icon} className='size-[70px]' />
                            </div> */}
                                <div id='action' className='text-7xl relative z-10 flex flex-col gap-3 w-full justify-center items-center h-full font-quicksand lg:h-1/2'>
                                    <h4 id='action' className='text-5xl lg:text-6xl font-autography relative z-10 h-fit lg:h-1/3 flex items-center'>{data.action}</h4>
                                    <div className='w-full h-fit lg:h-1/4 flex relative z-10 text-sm lg:text-lg font-bold justify-center items-center gap-3'>
                                        <h4 id='date' className='h-1/2 flex items-center'><FaCalendar className='me-2 text-yellow-palette' />{data.date}</h4>
                                        <h4 id='date' className='h-1/2 flex items-center'><IoIosTime className='me-2 text-yellow-palette' />{data.time}</h4>
                                    </div>
                                    <h4 id='date' className='text-sm lg:text-lg w-[70%] lg:w-1/2 relative z-10 h-fit lg:h-1/4 flex flex-col gap-2 lg:flex-row lg:gap-0 justify-center items-center font-bold'>{data.location}</h4>
                                    <h4 id='date' className='text-xs lg:text-base w-2/3 lg:w-1/2 relative z-10 h-fit lg:h-1/4 flex justify-center items-center'>{data.address}</h4>
                                    <a className='h-10 lg:h-1/6 w-fit text-white text-sm md:text-lg flex justify-center items-center rounded-full mt-3' href={data.maps} target='_blank'><button className='h-full w-full bg-yellow-palette text-white flex justify-center items-center rounded-full p-4'>Lihat Lokasi<FaExternalLinkAlt className='ms-2' /></button></a>
                                    <img ref={index + 1 == 1 ? left1 : index + 1 == 2 ? left2 : null} src={miniQuotesPattern} className='lg:hidden h-1/2 transform scale-[-1] object-cover absolute -left-12 z-0 will-change-transform' />
                                    <img ref={index + 1 == 1 ? right1 : index + 1 == 2 ? right2 : null} src={miniQuotesPattern} className='lg:hidden h-1/2 transform scale-y-[-1] object-cover absolute -right-12 z-0 will-change-transform' />
                                </div>
                            </div>
                        ))}
                        <img src={basePatternSvgBlack} className='absolute top-0 h-full w-full object-cover z-0' />
                        {/* <div className='w-1 h-full absolute bg-white'></div> */}

                        {/* left */}
                        <img ref={left2} src={miniQuotesPattern} className='hidden lg:block h-[250px] lg:h-[700px] transform scale-[-1] object-cover absolute top-1/2 -translate-y-1/2 lg:-top-3 lg:translate-y-0 -left-24 lg:-left-28 z-0 will-change-transform' />

                        {/* right */}
                        <img ref={right2} src={miniQuotesPattern} className='hidden lg:block h-[250px] lg:h-[700px] transform scale-y-[-1] lg:scale-100 object-cover absolute bottom-1/2 translate-y-1/2 lg:-bottom-3 lg:translate-y-0 -right-24 lg:-right-28 z-0 will-change-transform' />

                    </div>
                    {/* <div className='absolute top-0 h-fit w-full bg-transparent flex justify-center items-center z-30'>
                    <div className='absolute -top-16 size-32 bg-yellow-palette rounded-full p-2 z-30 border-[10px] border-white '>
                        <img src={flower} />
                    </div>
                </div> */}
                </div>
                <i ref={note} className='absolute bottom-[5%] w-full flex justify-center items-center font-quicksand text-black-palette lg:text-base text-xs'>
                    Tanpa mengurangi rasa hormat, <br className='md:hidden' />mohon maaf kami tidak menerima tamu di rumah.
                </i>
            </section>
        </>
    )
}

export default TimelineSection