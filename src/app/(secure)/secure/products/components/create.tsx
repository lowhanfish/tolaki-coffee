"use client"

import { useState, Dispatch, SetStateAction } from "react"

import Modal from '@/components/items/Modal'
import Button from '@/components/items/Button'
import InputField from "@/components/items/InputField"
import InputFile from "@/components/items/InputFile"
import InputRichText from "@/components/items/InputRichText"





interface createProps {
    modal: boolean,
    SetModal: Dispatch<SetStateAction<boolean>>
}

interface formProps {
    id: string,
    title: string,
    price: number,
    unit_price: string,
    stock: number,
    desc: string,
    img: File[],
}

const Create = ({ modal, SetModal }: createProps) => {
    const [form, setForm] = useState<formProps>({
        id: "",
        title: "",
        price: 0,
        unit_price: "",
        stock: 0,
        desc: "",
        img: [],
    })

    const saveData = () => {
        console.log(form)
    }

    const SetObjForm = (data: string | number | File[], key: keyof formProps) => {
        setForm({
            ...form,
            [key]: data
        })
    }

    return (
        <Modal size="md" openModal={modal} setOpenModal={SetModal} color="primary" title="Config">
            <div className="flex gap-2 flex-col py-5 px-3">
                <div>
                    <InputField
                        title="Product Name"
                        type="text"
                        value={form.title}
                        onChange={(e) => SetObjForm(e, "title")}
                    />
                </div>
                <div className="flex gap-2 w-full">
                    <InputField
                        title="Price"
                        type="number"
                        value={form.price}
                        onChange={(e) => SetObjForm(e, "price")}
                    />

                    <InputField
                        title="Unit Price"
                        type="text"
                        value={form.unit_price}
                        onChange={(e) => SetObjForm(e, "unit_price")}
                    />
                </div>

                <div className="w-full">
                    {/* <InputtextArea
                        value={form.desc}
                        onChange={(e) => SetObjForm(e, "desc")}
                        title="Product Description"
                    /> */}

                    <InputRichText
                        title="Produce Description"
                        value={form.desc}
                        onChange={(htmlText) => SetObjForm(htmlText, 'desc')} // Mengirim data HTML kembali ke state 'desc'
                    />
                </div>

                <div className="w-full">


                    <InputFile
                        title="Product Images"
                        onChange={(val) => {
                            SetObjForm(val, "img")
                        }}
                    />
                </div>
            </div>

            <div className="border-y-[0.1px] border-black/20 py-2 mb-3 mx-3 flex gap-2 justify-end">
                <div className="w-25">

                    <Button
                        color="primary"
                        onClick={() => saveData()}
                    >
                        <div className="flex gap-2 items-center">
                            <p>💾</p>
                            <p className="text-white font-bold text-[12px]">Save</p>
                        </div>
                    </Button>
                </div>
                <div className="w-25">

                    <Button
                        color="danger"
                        onClick={() => SetModal(!modal)}
                    >
                        <div className="flex gap-2 items-center">
                            <p>🚫</p>
                            <p className="text-white font-bold text-[12px]">Cancel</p>
                        </div>
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default Create
