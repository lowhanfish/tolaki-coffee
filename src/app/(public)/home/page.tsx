import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeAbout from './components/HomeAbout'


const page = () => {
    return (
        <div className='h-full w-full'>
            <div className='h-full w-full'>
                <HomeHeader />
            </div>
            <div className='h-full w-full color-main'>
                <HomeAbout />
            </div>
        </div>
    )
}

export default page
