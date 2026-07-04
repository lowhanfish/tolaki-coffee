import { ReactNode } from 'react'
import AdminSidebar from '@/components/AdminSidebar'
import { IoIosMenu } from "react-icons/io";
import Image from 'next/image';



interface ChildrensProps {
    children: ReactNode
}


const layout = ({ children }: ChildrensProps) => {
    return (
        <div className='w-full h-full flex flex-col text-neutral-800'>



            <div className='w-full h-full flex'>
                <AdminSidebar />

                <div className='w-full flex flex-col'>
                    <div className='h-17 bg-linear-to-l from-yellow-600 to-yellow-200 items-center p-5 flex flex-row'>
                        <div className='flex-1 flex gap-2 items-center'>
                            <div className='rounded-full bg-yellow-400 p-3 cursor-pointer shadow-sm'>
                                <IoIosMenu />
                            </div>
                            <p >Dashboard</p>
                        </div>
                        <div className='flex-1 flex items-center justify-end'>
                            <p>Kiken SB</p>
                            <div>

                            </div>
                        </div>
                    </div>

                    <div className='flex-1 p-[7px_7px_0px_7px] w-full'>

                        <div className='bg-white w-full h-full p-3'>
                            {children}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default layout
