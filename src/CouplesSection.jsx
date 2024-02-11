import React from 'react'
import RingLogo from './assets/image/ring-logo.jpg'

const CouplesSection = () => {
    return (
        <div className='flex justify-center items-center text-center h-64'>
            <div id="couple-1" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif">
                <div className='text-4xl text-center'>Eugenia Tyaswening Kristiasancti</div>
                <hr className='border-black-palette w-64' />
                <div className="">Putri dari Andreas Wahyu Krisdiarto & Ibu Maria Titi Purwaningsih</div>
            </div>
            <div id="and-sign" className="h-fit w-1/5 text-9xl font-[script]">
                <img src={RingLogo} className='object-cover'/>
            </div>
            <div id="couple-2" className="h-fit w-1/2 flex flex-col justify-center items-center gap-4 font-serif">
                <div className='text-4xl'>Leonardus Firstanto Padmatirta</div>
                <hr className='border-black-palette w-64' />
                <div className="">Putra dari Yoseph Arie Sixtioso L & Ibu Margaretha Padmi Rahayu</div>
            </div>
        </div>
    )
}

export default CouplesSection