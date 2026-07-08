"use client"

import { useState, Dispatch, SetStateAction } from "react"

import Modal from '@/components/items/Modal'
import Button from '@/components/items/Button'
import InputField from "@/components/items/InputField"
import InputFile from "@/components/items/InputFile"
import InputRichText from "@/components/items/InputRichText"
import InputtextArea from "@/components/items/InputtextArea"





interface createProps {
    modal: boolean,
    SetModal: Dispatch<SetStateAction<boolean>>
}

interface formProps {
    id: string,
    brand: string,
    quotes: string,
    desc: string,
    val: string,
    img: File[],
}

const Create = ({ modal, SetModal }: createProps) => {
    const [form, setForm] = useState<formProps>({
        id: "",
        brand: "",
        quotes: "",
        desc: "",
        val: "",
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
        <Modal size="lg" openModal={modal} setOpenModal={SetModal} color="primary" title="Config">
            <div className="flex gap-2 flex-col py-5 px-3">
                <div className="w-full">
                    <InputFile
                        title="Images Profile"
                        onChange={(val) => {
                            SetObjForm(val, "img")
                        }}
                    />
                </div>
                <div>
                    <InputField
                        title="Brand Name"
                        type="text"
                        value={form.brand}
                        onChange={(e) => SetObjForm(e, "brand")}
                    />
                </div>
                <div>
                    <InputField
                        title="Quotes"
                        type="text"
                        value={form.brand}
                        onChange={(e) => SetObjForm(e, "quotes")}
                    />
                </div>
                <div>
                    <InputtextArea
                        title="Quotes"
                        value={form.brand}
                        onChange={(e) => SetObjForm(e, "quotes")}
                    />
                </div>

                <div className="w-full">
                    <InputRichText
                        title="Produce Description"
                        value={form.val}
                        onChange={(htmlText) => SetObjForm(htmlText, 'val')} // Mengirim data HTML kembali ke state 'desc'
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
