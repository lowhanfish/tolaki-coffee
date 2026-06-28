import React from 'react'
import Image from 'next/image';

const HomeHeader = () => {
    return (
        <div className='h-full w-full flex items-center justify-center overflow-hidden bg-[#f1ece5] relative z-1'>
            <Image
                src={`/images/header.png`}
                fill
                alt='Header Image'
                className='object-cover h-full object-center -z-1'
            />
            <div className='x-10 h-full w-full flex z-999'>
                item
            </div>
        </div>
    );
}

export default HomeHeader
