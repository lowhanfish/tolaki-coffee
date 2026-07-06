"use client"

import { Dispatch, SetStateAction } from "react"

import Modal from '@/components/items/Modal'
import Button from '@/components/items/Button'
import InputField from "@/components/items/InputField"




interface createProps {
    modal: boolean,
    SetModal: Dispatch<SetStateAction<boolean>>
}

const Create = ({ modal, SetModal }: createProps) => {
    return (
        <Modal size="md" openModal={modal} setOpenModal={SetModal} color="dark" title="Config">
            <div className="flex gap-2 flex-col py-5 px-3">
                <div>
                    <InputField title="Product Name" type="text" />
                </div>
                <div className="flex gap-2 w-full">
                    <InputField title="Price" type="number" />
                    <InputField title="Unit Price" type="text" />
                </div>
                <div>
                    <textarea name="" id="">

                    </textarea>
                </div>
            </div>
        </Modal>
    )
}

export default Create
