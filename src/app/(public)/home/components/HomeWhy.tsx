import Image from 'next/image'
import React from 'react'


const HomeWhy = () => {
    return (
        // <div className="relative overflow-hidden rounded-2xl w-full h-75 isolate">
        //     {/* 1. Efek Gelap di Sudut (Vignette Layer) */}
        //     <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]" />

        //     {/* 2. Komponen Gambar Next.js */}
        //     <Image
        //         src={`/images/about.jpg`}
        //         alt='About Image'
        //         fill
        //         className='object-cover z-0'
        //     />

        //     {/* 3. Konten Teks di Atas Gambar */}
        //     <div className="relative z-20 p-6 text-white">
        //         <p>asdgsfd</p>
        //     </div>
        // </div>

        <div className='relative h-75 w-full overflow-hidden isolate'>


            <Image
                src={`/images/about.jpg`}
                alt='About Image'
                fill
                className='object-cover z-0'
            />

            <div className='z-1 absolute inset-0 bg-neutral-900 opacity-80 shadow-[inset_0_0_70px_rgba(0,0,0,0.9)]'>
                hh
            </div>
        </div>
    )
}

export default HomeWhy
