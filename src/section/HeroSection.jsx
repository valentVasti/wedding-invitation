import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import landingImage from '../assets/image/prewed/hero-4.jpg'
import flower from '../assets/image/flower-black.png'
import pattern from '../assets/image/pattern-yellow-svg.svg'
import patternMini from '../assets/image/pattern-mini.png'
import basePatternSvg from '../assets/image/base-pattern-white.svg'
import yellowDivider from '../assets/image/yellow-divider.png'
import yellowBird from '../assets/image/bird-yellow.png'
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
    <section className='bg-white w-full h-screen'>
      <div className='h-full w-full relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-screen flex justify-between'>
          {/* <div ref={patternLeft} className='size-[400px] -translate-x-full z-40 pattern-left will-change-transform'>
            <Pattern />
          </div>
          <div ref={patternRight} className='size-[400px] translate-x-full transform scale-x-[-1] z-40 pattern-right will-change-transform'>
            <Pattern />
          </div> */}
          <img ref={patternLeft} src={pattern} className='size-[150px] lg:size-[400px] -translate-x-500 -translate-y-500 opacity-0 z-40 pattern-left will-change-transform' />
          <img ref={patternRight} src={pattern} className='size-[150px]  lg:size-[400px] translate-x-500 -translate-y-500 opacity-0 transform scale-x-[-1] z-40 pattern-right will-change-transform' />
        </div>
        <img ref={background} src={basePatternSvg} className='scale-[1.15] opacity-0 h-full w-full object-cover absolute top-0 z-0 will-change-transform' />

        <div className=' relative top-0 text-black bg-transparent h-full w-full flex flex-col justify-center items-center z-30'>
          {/* <img src={yellowBird} className='h-10 mb-6 object-cover md:hidden' /> */}
          <div ref={coupleImage} className='opacity-0 size-[250px] md:size-[500px] flex relative justify-center items-center z-20 bg-transparent will-change-transform translate-y-[20]'>
            <img src={landingImage} className='size-full object-cover rounded-full shadow-xl will-change-transform -rotate-2 z-10' />
            {/* <img src={framePhoto} className='size-[550px] object-cover object-center absolute -translate-x-2 -rotate-[90deg] will-change-transform z-0' /> */}
          </div>
          <img src={yellowDivider} className='w-32 md:w-60 my-5 animate-text' />
          <div className='text-center text-4xl md:text-6xl tracking-tighter font-quicksand mb-4 animate-text will-change-transform opacity-0 translate-y-20'>Dewi & Dimas</div>
          <div className='text-xs text-center md:text-base font-quicksand animate-text will-change-transform opacity-0 translate-y-20 w-[70%] italic'>
            Setelah ini, kasih dan cinta itu sendiri yang menjadi permulaan, perjalanan, serta batas menggenapi. <br /> <span>Pernikahan, pilihan yang akan kami rayakan setiap pagi dan syukuri di ujung hari.</span>
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default HeroSection