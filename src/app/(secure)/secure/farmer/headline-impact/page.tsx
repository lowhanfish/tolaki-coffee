'use client'

import { useState } from 'react'

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { GiPlantRoots, GiMountainRoad } from "react-icons/gi";
import { FaPeopleRoof, FaGear } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Image from "next/image"
import Button from "@/components/items/Button"
import Modal from "@/components/items/Modal"
import Create from './components/create';
import Pagination from '@/components/items/Pagination';
import SelectListShow from '@/components/items/SelectListShow';






const List = [
    { id: 3, title: "Arabica Coffee", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi3.png" },
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

            <hr className='h-2 bg-neutral-200 mt-2 border-none' />

            <div className='flex-1 mt-2'>
                <div className="grid grid-cols-12 gap-2">
                    {
                        [...Array(8)].map((item, index) => (
                            <div key={index} className='col-span-3'>
                                <div className='relative border-5 border-white shadow-sm rounded-md px-3 py-2 bg-linear-to-r from-white to-yellow-600/10'>
                                    <p className='text-[15px] text-neutral-600 font-bold'>Konawe Selatan</p>
                                    <div>
                                        <div className='flex items-center gap-3'>
                                            <FaPeopleRoof className='text-amber-500 text-[20px]' />
                                            <p className='text-[12px] text-amber-700'><span className='font-bold text-[13px] '>120</span> Petani</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <GiPlantRoots className='text-amber-500 text-[20px]' />
                                            <p className='text-[12px] text-amber-700'><span className='font-bold text-[13px] '>55</span> Ha</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <GiMountainRoad className='text-amber-500 text-[20px]' />
                                            <p className='text-[12px] text-amber-700'><span className='font-bold text-[13px] '>500-1000</span> Mdpl</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => SetModal(!modal)}
                                        className='absolute top-2 right-2 hover:bg-neutral-700/10 rounded-full p-1 cursor-pointer'>
                                        <FaGear className='text-amber-600' />
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
            <div>

                <hr className='h-2 bg-neutral-200 mt-3 border-none' />

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
