import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import landingImage from '../assets/image/landing-img-3.jpg'
import flower from '../assets/image/flower-black.png'
import pattern from '../assets/image/pattern-yellow-svg.svg'
import patternMini from '../assets/image/pattern-mini.png'
import basePatternSvg from '../assets/image/base-pattern.svg'
import framePhoto from '../assets/image/frame-photo-2.svg'
import Pattern from '../components/Pattern'

const HeroSection = () => {
  const patternLeft = useRef(null)
  const patternRight = useRef(null)
  const background = useRef(null)
  const coupleImage = useRef(null)

  useEffect(() => {
    gsap.fromTo(patternLeft.current, { x: -500, y: -500, opacity: 0 }, { opacity: 1, x: -12, y: -16, duration: 2, ease: 'sine.inOut' });
    gsap.fromTo(patternRight.current, { x: 500, y: -500, opacity: 0 }, { opacity: 1, x: 12, y: -16, duration: 2, ease: 'sine.inOut' });
    gsap.fromTo(background.current, { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 3 })
    gsap.fromTo(coupleImage.current, { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 2, delay: 1 })
    gsap.fromTo('.animate-text', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 1, delay: 2 });

  }, []);

  return (
    <div className='bg-white w-full h-screen'>
      <div className='h-full w-full relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-screen bg-black-palette flex justify-between'>
          {/* <div ref={patternLeft} className='size-[400px] -translate-x-full z-40 pattern-left will-change-transform'>
            <Pattern />
          </div>
          <div ref={patternRight} className='size-[400px] translate-x-full transform scale-x-[-1] z-40 pattern-right will-change-transform'>
            <Pattern />
          </div> */}
          <img ref={patternLeft} src={pattern} className='size-[400px] -translate-x-full z-40 pattern-left will-change-transform' />
          <img ref={patternRight} src={pattern} className='size-[400px] translate-x-full transform scale-x-[-1] z-40 pattern-right will-change-transform' />
        </div>
        <img ref={background} src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0 will-change-transform' />

        <div className='relative top-0 text-white bg-transparent h-full w-full flex flex-col justify-center items-center z-30'>
          <div ref={coupleImage} className='size-[500px] flex relative justify-center items-center z-20 bg-transparent will-change-transform'>
            <img src={landingImage} className='size-full object-cover object-center rounded-full shadow-gray-950 shadow-xl will-change-transform' />
            <img src={framePhoto} className='size-[550px] object-cover object-center absolute -translate-x-2 -rotate-[90deg] will-change-transform' />
          </div>
          <div className='text-6xl font-[script] tracking-wider mt-12 animate-text will-change-transform'>Wening & Leo</div>
          <div className='text-7xl font-serif tracking-wider animate-text will-change-transform'>We're Getting Married!</div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default HeroSection