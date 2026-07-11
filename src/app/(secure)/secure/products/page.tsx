'use client'

import { useState } from 'react'

import { BsFillPencilFill, BsFillTrashFill, } from "react-icons/bs";
import { FaMagnifyingGlass, FaGear } from "react-icons/fa6";

import Image from "next/image"
import Button from "@/components/items/Button"
import Modal from "@/components/items/Modal"
import Create from './components/create';
import Pagination from '@/components/items/Pagination';
import SelectListShow from '@/components/items/SelectListShow';






const List = [
    { id: 3, title: "Arabica Coffee", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/kopi3.png" },
    { id: 1, title: "Tubruk Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/kopi1.png" },
    { id: 4, title: "Kopi Tolaki", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/kopi4.png" },
    { id: 2, title: "Tolaki Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/kopi2.png" },
]


const Page = () => {


    const test = () => {
        alert("Hy saya di click")
    }

    const [modal, SetModal] = useState<boolean>(false)
    const [modalCreate, SetModalCreate] = useState<boolean>(false)
    const [pageShow, setPageShow] = useState<number | string>(8)

    return (
        <div className=''>
            <div className='bg h-15 grid grid-cols-3 px-3'>
                <div className="col-span-1 flex items-center w-full">
                    <div className="form-input">
                        <input placeholder='Cari Data' className="input-form px-2 text-[14px]" type="text" />
                        <button className="btn-form"
                            onClick={() => SetModalCreate(!modalCreate)}
                        >
                            <p className="text-center w-full">+</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex-1 mt-2'>
                <div className="grid grid-cols-12 gap-2">
                    {
                        List.map((item, index) => (
                            <div key={index} className='col-span-3'>
                                <div className='relative bg-linear-to-b from-amber-800/20 to-white border-6 border-white shadow-md rounded-md'>
                                    <div className='shadow rounded-sm'>

                                        <div className='relative h-38 w-full rounded-md'>
                                            <Image
                                                alt='Petani'
                                                src={item.img}
                                                fill
                                                className='object-cover rounded-t-md'
                                                loading="eager"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className='p-3 rounded-sm'>
                                            <p className='text-[16px] font-bold text-black/60'>{item.title}</p>
                                            <p className='text-[12px] pt-1'>"{item.subtitle}"</p>
                                            <div className='mt-2'>
                                                <p className='text-[12px] text-black/50 font-bold'>Stock : {item.stock}-{item.vol}</p>
                                                <p className='text-[12px] text-black/50 font-bold'>Rp. {item.price}/{item.vol}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => SetModal(!modal)}
                                        className='absolute top-1 right-1 hover:bg-neutral-700/60 rounded-full p-1 cursor-pointer'>
                                        <FaGear className='text-amber-400' />
                                    </button>

                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
            <div className='grid grid-cols-12 py-5'>
                <div className='col-span-10'>
                    <Pagination total={999} limit={5} />
                </div>
                <div className='col-span-2'>
                    <SelectListShow
                        onChange={(val) => {
                            setPageShow(val)
                        }}
                        size='sm' />
                </div>
            </div>




            <Modal size="xxs" openModal={modal} setOpenModal={SetModal} color="dark" title="Config">
                <div className="flex gap-2 flex-col py-5">
                    <Button color="primary" size="h-6" type="rounded">
                        <div className="item-btn-primary text-[12px]">
                            <FaMagnifyingGlass />
                            <p className="">Detail</p>
                        </div>
                    </Button>
                    <Button color="warning" size="h-6" type="rounded">
                        <div className="item-btn-warning text-[12px]">
                            <BsFillPencilFill />
                            <p className="">Update</p>
                        </div>
                    </Button>
                    <Button color="danger" size="h-6" type="rounded" onClick={test}>
                        <div className="item-btn-danger text-[12px]">
                            <BsFillTrashFill />
                            <p className="">Delete</p>
                        </div>
                    </Button>
                </div>
            </Modal>


            <Create
                modal={modalCreate}
                SetModal={SetModalCreate}
            />





        </div>
    )
}

export default Page
