import Image from 'next/image'
import React from 'react'


const NoImage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image
                alt='No Image'
                src={`/images/no-image.png`}
                height={75}
                width={150}
            />
            <p className='text-[12px] font-bold'>"No Image...‼️"</p>
        </div>
    )
}

export default NoImage
