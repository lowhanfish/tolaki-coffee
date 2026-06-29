import Image from 'next/image'
import React from 'react'


const HomeAbout = () => {
    return (

        <div className='flex bg px-20'>
            <div className='flex-1'>
                <p>TENTANG KAMI</p>
                <div className='text-neutral-900'>
                    <p>Kopi Tolaki</p>
                    <p>Dari Daerah Untuk Dunia.</p>
                </div>

                <button className='cursor-pointer border-2 border-neutral-800 text-neutral-800 rounded-md text-[12px] font-bold '>
                    Selengkapnya Tentang Kami
                </button>
            </div>
            <div className='flex-1 h-full relative'>
                <Image
                    src={`/images/about.jpg`}
                    alt='About Image'
                    className='object-cover'
                    height={300}
                    width={500}
                />
            </div>

        </div>

    )
}

export default HomeAbout
