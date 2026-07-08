import Image from 'next/image';
import { ReactNode } from 'react'
import { BsFillGearFill, BsFillVinylFill } from "react-icons/bs";
import NoImage from '../NoImage';



interface ItemListProps {
    title: string,
    children?: ReactNode,
    type?: string,
    image?: string,
    onClick?: () => void
}

const ItemList = ({ title, children, type, image, onClick }: ItemListProps) => {
    return (
        <div>
            <div className='flex gap-2 border-y-[0.1px] border-dashed border-neutral-300 py-2'>
                <div className='w-7 '>
                    {
                        onClick ? (
                            <div
                                className='w-5 h-5 bg-black/50 hover:bg-black/79 rounded-full flex justify-center items-center cursor-pointer'>
                                <BsFillGearFill className='text-white text-[14px]' />
                            </div>
                        ) : (

                            <div
                                className='w-5 h-5 bg-black/20 rounded-full flex justify-center items-center cursor-pointer'>
                                <BsFillVinylFill className='text-white text-[16px]' />
                            </div>
                        )
                    }
                </div>
                <div className='flex-1 flex items-center'>
                    <p className='text-[13px] font-bold'>{title}</p>
                </div>
            </div>

            <div className='py-2 text-neutral-600'>
                {
                    type && type == "image" ? (
                        <div className='flex items-center justify-center '>
                            {
                                image ? (
                                    <Image
                                        alt='About Image'
                                        src={`/images/about.png`}
                                        height={300}
                                        width={500}
                                        className='object-contain border-white border-5 shadow-md rounded-sm'
                                    />
                                ) : (
                                    <NoImage />
                                )
                            }
                        </div>
                    ) : (
                        <>
                            {children}
                        </>
                    )
                }


            </div>
        </div>
    )
}

export default ItemList
