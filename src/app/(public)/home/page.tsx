import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeAbout from './components/HomeAbout'
import HomeProduct from './components/HomeProduct'
import HomeWhy from './components/HomeWhy'
import Footer from '@/components/Footer'



const page = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full bg'>
                    <HomeHeader />
                </div>
                <div className=' w-full bg px-5 md:px-30 pt-10'>
                    <HomeAbout />
                </div>
                <div className='w-full bg px-5 md:px-30 pt-20'>
                    <HomeProduct />
                </div>
                <div className='w-full pt-20'>
                    <HomeWhy />
                </div>
            </div>
        </>
    )
}

export default page
