import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import anime from 'animejs'

const AnimateLoveOneLine = forwardRef((props, ref) => {
    const svg = useRef(null)
    const [hidden, setHidden] = useState('hidden')

    const animation = () => {
        const animation = anime({
            targets: svg.current,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            delay: function (el, i) { return i * 2000 },
        });
        return animation
    }

    const playAnimation = () => {
        animation().play()
    }

    const handleShow = () => {
        setHidden('')
    }

    useImperativeHandle(ref, () => ({
        handleShow,
        playAnimation
    }));

    return (
        <svg id="f4a8c9d6-ca82-4d98-b879-003a6e1ff7e3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.11 162.56" className={`will-change-transform ${hidden} h-[200px]`}>
            <path ref={svg} transform="translate(-37.4 -48.25)" fill='none' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M885.51,67c-35,39.41-79.33,62.64-130.25,74.08-20.54,4.61-41.45,6.22-62.45,7.65-31.82,2.18-63.54-1.33-95.32-.22-40,1.39-77.59,9.93-110.2,34.87-9.26,7.08-15.44,16.43-22.81,26.4-26.75-20.59-52.86-41.68-72.41-69.71a83,83,0,0,1-11.65-23.3c-4-13.16-.54-26.49,8.47-32.82,9.32-6.55,28.54-5.24,38.17,2,9.39,7.08,15.22,27.17,22.19,36.07.35-1.42.73-2.88,1-4.24,3.29-16.51,2.35-32.08,9.76-46.51,8.29-16.14,24.44-25.21,36.85-21.12,15.53,5.11,24.2,19.27,23.43,36.93-1.44,33.25-19.41,57-43.55,77.24-11.65,9.75-25.62,15.68-39.14,22.29-16.13,7.47-38.87,8.59-56.13,9.36-39,1.75-76.57-7.22-113.21-19.15a953.31,953.31,0,0,0-134.61-33.33,463.36,463.36,0,0,0-95.25-6.65" />
        </svg>

    )
})

export default AnimateLoveOneLine
