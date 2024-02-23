import React from 'react'
import basePatternSvg from '../assets/image/base-pattern.svg'
import miniQuotesPattern from '../assets/image/mini-quotes-pattern.svg'

const QuotesSection = () => {
    return (
        <div className='bg-black-palette w-full h-80 flex flex-col justify-center items-center relative gap-3 overflow-hidden'>
            <div className='w-[1000px] text-center h-fit flex flex-col justify-center items-center gap-5 tracking-wide text-4xl text-white-palette z-10 font-serif'>
                <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt sit repudiandae esse tempora placeat minus similique obcaecati doloribus aut."</div>
            </div>
            <img src={basePatternSvg} className='h-full w-full object-cover absolute top-0 z-0' />
            <img src={miniQuotesPattern} className='size-96 transform scale-[-1] object-cover absolute -top-3 -left-20 z-0' />
            <img src={miniQuotesPattern} className='size-96 transform object-cover absolute -bottom-3 -right-20 z-0' />
        </div>
    )
}

export default QuotesSection