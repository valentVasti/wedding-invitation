import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <Outlet />
        </div>
    )
}

export default Root