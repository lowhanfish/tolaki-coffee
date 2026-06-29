import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeAbout from './components/HomeAbout'
import HomeProduct from './components/HomeProduct'



const page = () => {
    return (
        <div className='h-full w-full'>
            <div className='h-full w-full bg'>
                <HomeHeader />
            </div>
            <div className=' w-full bg px-5 md:px-30 pt-10'>
                <HomeAbout />
            </div>
            <div className='w-full bg px-5 md:px-30 pt-20'>
                <HomeProduct />
            </div>
        </div>
    )
}

export default page
