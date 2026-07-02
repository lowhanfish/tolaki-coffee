import React from 'react'
import Image from 'next/image';

const HomeHeader = () => {
    return (
        <div className='relative w-full h-160 md:h-110 lg:h-140 xl:h-170 flex items-center justify-center overflow-hidden z-1 py-2 px-1 md:px-30'>
            <div className='block md:hidden absolute inset-0 bg-linear-to-b from-black to-transparent opacity-90'>

            </div>

            <Image
                src={`/images/header.png`}
                fill
                alt='Header Image'
                className='object-cover md:object-fill w-full object-center -z-1'
            />

            <div className='h-full w-full flex items-center z-999'>
                <div className='grid grid-cols-12 w-full'>
                    <div className='col-span-12 md:col-span-6 '>
                        <div className='text-center md:text-left'>
                            <p className='text-white text-[50px] md:text-[70px] font-bold'>Rasa Asli</p>
                            <p className='text-amber-500 text-[50px] md:text-[70px] font-bold -mt-7 md:-mt-10'>Bangga Lokal</p>
                            <div>
                                <p>Kopi Pilihan dari Petani Lokal Sulawesi Tenggara,</p>
                                <p>diolah dengan hati, untuk cita rasa terbaik.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 pt-5 px-5 md:px-0'>
                            <button className='btn-normal rounded-md'>
                                <p>Belanja Sekarang</p>
                            </button>
                            <button className='btn-normal rounded-md'>
                                <p>Kenali Kami</p>
                            </button>
                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader
