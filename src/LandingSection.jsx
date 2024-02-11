import React from 'react'
import landingImage from './assets/image/landing-img-3.jpg'
import flower from './assets/image/flower-black.png'
import pattern from './assets/image/pattern-yellow-svg.svg'
import patternMini from './assets/image/pattern-mini.png'
import basePatternSvg from './assets/image/base-pattern.svg'
import framePhoto from './assets/image/frame-photo-2.svg'

const LandingSection = () => {
  return (
    <div className='bg-white w-full h-screen'>
      <div className='h-full w-full relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-screen bg-black-palette flex justify-between'>
          <img src={pattern} className='size-[400px] -translate-x-12 -translate-y-16 z-40' />
          <img src={pattern} className='size-[400px] translate-x-12 -translate-y-16 transform scale-x-[-1] z-40' />
        </div>
        <img src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0' />

        <div className='relative top-0 text-white bg-transparent h-full w-full flex flex-col justify-center items-center z-30'>
          <div className='size-[500px] flex relative justify-center items-center z-20 bg-transparent'>
            <img src={landingImage} className='size-full object-cover object-center rounded-full shadow-gray-950 shadow-xl' />
            <img src={framePhoto} className='size-[550px] object-cover object-center absolute -translate-x-2 -rotate-[90deg] ' />
          </div>
          {/* <hr className='border-2 absolute top-1/2 border-dashed border-yellow-palette w-full'/> */}
          <div className='text-6xl font-[script] tracking-wider mt-12'>Wening & Leo</div>
          {/* <div className='h-10 w-full flex justify-center items-center'>
            <hr className='w-1/5 border-2 border-yellow-palette border-dashed' />
            <img src={flower} className='w-[4.5%]' />
            <hr className='w-1/5 border-2 border-yellow-palette border-dashed' />
          </div> */}
          <div className='text-7xl font-serif tracking-wider'>We're Getting Married!</div>
        </div>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-black z-20 opacity-50'>
        </div> */}
      </div>
      <div>
      </div>
    </div>
  )
}

export default LandingSection