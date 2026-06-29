import Image from 'next/image'
import React from 'react'


const HomeAbout = () => {
    return (

        <div className='grid grid-cols-9 items-center'>
            <div className='col-span-9 md:col-span-4'>
                <p className='title-text color-main'>TENTANG KAMI</p>
                <div className='text-neutral-900 pt-2 text-[35px] font-bold'>
                    <p className='text-[50px]'>Kopi Tolaki</p>
                    <p className='-mt-3'>Dari Daerah Untuk Dunia.</p>
                </div>

                <div className='pt-3 pr-20 text-[13px]'>
                    <p className='text-neutral-500'>
                        Kopi Tolaki hadir dari semangat petani lokal Sulawesi Tenggara yang diwariskan turun-temurun. Kami mengumpulkan biji kopi terbaik dari berbagai daerah, lalu mengolahnya dengan standar tinggi untuk menghaslikan cita rasa yang khas, konsisten, dan membanggakan.
                    </p>
                </div>

                <button className='mt-6 cursor-pointer list-button'>
                    Selengkapnya Tentang Kami
                </button>
            </div>
            <div className='col-span-9 md:col-span-5 h-full relative bg-linear-to-b from-amber-500 to-amber-300 rounded-2xl'>
                <Image
                    src={`/images/about.png`}
                    alt='About Image'
                    className='object-cover rounded-2xl relative shadow-[inset_0_0_50px_rgba(15,23,42,0.7)]'
                    height={300}
                    width={500}
                />



            </div>

        </div>

    )
}

export default HomeAbout
