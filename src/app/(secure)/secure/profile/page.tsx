"use client"

import { useState, useEffect } from 'react'
import ItemList from '@/components/items/ItemList'
import Button from '@/components/items/Button';
import Create from './components/create';



const data = [
    {
        id: "1",
        brand: "Kopi Tolaki",
        quotes: "Dari Daerah Untuk Dunia",
        des: "Kopi Tolaki hadir dari semangat petani lokal Sulawesi Tenggara yang diwariskan turun-temurun. Kami mengumpulkan biji kopi terbaik dari berbagai daerah, lalu mengolahnya dengan standar tinggi untuk menghaslikan cita rasa yang khas, konsisten, dan membanggakan.",
        val: `
            Lorem ipsum dolor sit amet, minim laborum id mollit nulla. Mollit ut tempor ut est labore enim pariatur. Do sunt culpa minim tempor dolore id veniam veniam voluptate id. In ut minim elit voluptate occaecat dolore mollit. Id deserunt aliquip irure in non in fugiat in nostrud ea.
            Culpa veniam ullamco eu deserunt ut enim veniam in esse nostrud eiusmod enim. Aliqua elit ad incididunt voluptate nisi occaecat nulla fugiat tempor sunt. Do dolore dolore consequat nulla fugiat duis dolore minim. Mollit in tempor quis duis sint velit minim cillum proident esse. In consectetur minim nulla est in do mollit nisi ad est consectetur. Et dolore velit minim ut ut et velit ad in non.
            Occaecat esse quis esse velit incididunt consequat nisi eu tempor sed. Cupidatat in pariatur dolor culpa incididunt ut cupidatat. Ut laboris enim nostrud laborum quis commodo nulla in dolore deserunt. Tempor magna sunt incididunt magna qui nostrud proident pariatur aute cupidatat esse. Nisi sunt elit excepteur officia laboris cupidatat ad veniam ullamco qui ad.
        `,
        img: "/images/about.png"
    },

]


const page = () => {

    const [modal, SetModal] = useState<boolean>(false)
    const [modalCreate, SetModalCreate] = useState<boolean>(false)

    const saveData = () => {

    }
    return (
        <div className='bg-white shadow-sm border-5 border-neutral-300 border-double rounded-xl lg:p-5 p-2 lg:m-10'>

            <div className='my-5 py-2 border-y-5 border-neutral-200'>
                <div className='w-30'>
                    <Button
                        color="primary"
                        onClick={() => SetModalCreate(!modalCreate)}
                    >
                        <div className="flex gap-2 items-center">
                            <p>💾</p>
                            <p className="text-white font-bold text-[12px]">Add Data</p>
                        </div>
                    </Button>
                </div>


            </div>


            <ItemList title='Image' type='image' image={data[0].img} />

            <ItemList title='Brand'>
                <p className='text-[18px] font-bold'>{data[0].brand}</p>
            </ItemList>
            <ItemList title='Quotes'>
                <p className='text-[16px] font-bold'>{data[0].quotes}</p>
            </ItemList>
            <ItemList title='Description'>
                <p className='text-[13px] font-bold'>{data[0].des}</p>
            </ItemList>
            <ItemList title='Detail'>
                <p className='text-[13px]'>{data[0].val}</p>
            </ItemList>


            <Create
                modal={modalCreate}
                SetModal={SetModalCreate}
            />



        </div>
    )
}

export default page
