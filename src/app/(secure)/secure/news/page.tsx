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
    { id: 3, title: "Arabica Coffee adalah loremp insump kkashdkf kahsdjf asdjkf akjsdf", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 1, title: "Tubruk Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 4, title: "Kopi Tolaki", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 2, title: "Tolaki Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 3, title: "Arabica Coffee", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 1, title: "Tubruk Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 4, title: "Kopi Tolaki", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
    { id: 2, title: "Tolaki Robusta", subtitle: "Medium Roast (200gr)", stock: 12, price: 85000, vol: "Pack", img: "/images/about.png" },
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
            <div className='bg h-15 grid grid-cols-3 px-3 shadow-sm rounbde-lg'>
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
                            <div key={index} className='col-span-6'>
                                <div className='relative h-full border-7 border-white rounded-xl shadow-sm'>
                                    <div className='shadow-sm h-full rounded-lg flex '>

                                        <div className='relative w-30 h-full rounded-md'>
                                            <Image
                                                className='object-cover rounded-l-md'
                                                alt='Petani'
                                                src={item.img}
                                                fill
                                                loading="eager"
                                            />
                                        </div>
                                        <div className='flex-1 p-3 rounded-sm'>
                                            <p className='text-[16px] font-bold text-black/60 line-clamp-1'>{item.title}</p>

                                            <div className='flex gap-2 items-center pt-2'>
                                                <i className="bi bi-clock text-[11px] text-neutral-600"></i>
                                                <p className='text-[12px] text-neutral-500'>20 Nov 2026</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <i className="bi bi-person-circle text-[11px] text-neutral-600"></i>
                                                <p className='text-[12px] text-neutral-500'>Kiken SB</p>
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
