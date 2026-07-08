import Image from 'next/image';
import { ReactNode } from 'react'
import { BsFillPencilFill } from "react-icons/bs";


interface ItemListProps {
    title: string,
    children?: ReactNode,
    type?: string,
    image?: string
}

const ItemList = ({ title, children, type, image }: ItemListProps) => {
    return (
        <div>
            <div className='flex gap-2 border-y-[0.1px] border-dashed border-neutral-300 py-2'>
                <div className='w-7 '>
                    <div className='w-7 h-7 bg-black/50 hover:bg-black/79 rounded-full flex justify-center items-center cursor-pointer'>
                        <BsFillPencilFill className='text-white' />
                    </div>
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
