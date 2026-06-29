import Image from 'next/image'
import React from 'react'


const HomeProduct = () => {
    return (
        <div className='text-neutral-800'>
            <p className='title-text color-main'>ETALASE PRODUK</p>
            <div className='flex flex-col md:flex-row items-center py-3'>
                <div className='flex-1 w-full'>
                    <p className='title-header-3'>Produk Pilihan Kami</p>
                </div>
                <div className='flex-1 flex w-full justify-end'>
                    <button className='list-button cursor-pointer'>
                        Lihat Semua Product
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 w-full'>
                {
                    [...Array(4)].map((item, index) => (
                        <div className='flex-1 bg-white rounded-lg' key={index}>
                            <div className='relative h-50'>
                                <Image
                                    src={`/images/kopi1.png`}
                                    alt='Product'
                                    fill
                                    className='object-cover rounded-t-lg'
                                />
                            </div>
                            <div className='px-5 py-3'>
                                <div>
                                    <p className='text-item-header'>Kopi Tolaki</p>
                                    <p className='text-item-body'>Medium Roast</p>
                                    <p className='text-item-regular pt-2'><span className='text-item-header'>Rp. 85.000</span>/200gr</p>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default HomeProduct
