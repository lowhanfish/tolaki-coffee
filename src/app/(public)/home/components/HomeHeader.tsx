import React from 'react'
import Image from 'next/image';

const HomeHeader = () => {
    return (
        <div className='h-full w-full flex items-center justify-center overflow-hidden relative z-1 py-2 px-1 md:px-30'>
            <Image
                src={`/images/header.png`}
                fill
                alt='Header Image'
                className='object-cover h-full object-center -z-1'
            />
            <div className=' x-10 h-full w-full flex items-center z-999'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6'>
                        <div>
                            <p className='text-white md:text-[70px] font-bold'>Rasa Asli</p>
                            <p className='text-amber-500 md:text-[70px] font-bold -mt-10'>Bangga Lokal</p>
                            <div>
                                <p>Kopi Pilihan dari Petani Lokal Sulawesi Tenggara,</p>
                                <p>diolah dengan hati, untuk cita rasa terbaik.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 pt-5'>
                            <button className='color-main btn-normal w-5]'>
                                <p>Belanja Sekarang</p>
                            </button>
                            <button className='border-2  w-50'>
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
