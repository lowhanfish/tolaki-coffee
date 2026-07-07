'use client'

import { useState } from 'react'

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Image from "next/image"
import Button from "@/components/items/Button"
import Modal from "@/components/items/Modal"
import Create from './components/create';





const List = [
    { id: 3, title: "Arabica Coffee", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi3.png" },
    { id: 1, title: "Tubruk Robusta", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi1.png" },
    { id: 4, title: "Kopi Tolaki", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi4.png" },
    { id: 2, title: "Tolaki Robusta", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi2.png" },
]


const Page = () => {


    const test = () => {
        alert("Hy saya di click")
    }

    const [modal, SetModal] = useState<boolean>(false)
    const [modalCreate, SetModalCreate] = useState<boolean>(false)

    return (
        <div className=''>
            <div className='bg h-15 grid grid-cols-3 px-3'>
                <div className="col-span-1 flex items-center w-full">
                    <div className="form-input">
                        <input className="input-form" type="text" />
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
                            <div key={index} className="col-span-3 p-2 border border-neutral-300 rounded-sm">
                                <div className="relative h-40">
                                    <div onClick={() => SetModal(!modal)} className="h-7 w-7 flex justify-center items-center absolute right-1 top-1 bg-amber-200 rounded-full cursor-pointer z-1 border-2 border-white">
                                        <span className="text-16px">⚙️</span>
                                    </div>
                                    <Image
                                        alt="Image Product"
                                        src={item.img}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="pt-2">
                                    <p className="text-item-header">{item.title}</p>
                                    <p className="text-item-body">Stock : <span>{item.stock} pack</span></p>
                                    <p className="text-[12px] pt-2"><span className="font-bold">@{item.price}</span>/{item.vol}</p>
                                </div>
                            </div>

                        ))
                    }
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
