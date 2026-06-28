import React from 'react'
import Image from 'next/image';

const HomeHeader = () => {
    return (
        <div className='h-full w-full flex items-center justify-center overflow-hidden bg-[#f1ece5]'>
            <Image
                src={`/images/header.png`}
                fill
                alt='Header Image'
                className='object-cover object-center z-1'
            />
            <h1>Okelah</h1>
        </div>
    );
}

export default HomeHeader
