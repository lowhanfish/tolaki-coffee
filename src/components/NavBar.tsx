import Image from 'next/image'
import React from 'react'


const Menu = [
    { id: 1, title: "Home" },
    { id: 2, title: "Profile" },
    { id: 3, title: "Product" },
    { id: 4, title: "Farmer/Partnership" },
    { id: 5, title: "News" },
    { id: 6, title: "Contact" },
]


const NavBar = () => {
    return (
        <div className='absolute top-0 z-2 w-full'>
            <div className='grid grid-cols-12 w-full h-20 items-center justify-center py-2 px-1 md:px-10'>
                <div className='col-span-3 flex justify-end w-full '>
                    <Image
                        alt='Icon App'
                        // src={`/images/logo_light.png`}
                        src={`/images/logo_dark.png`}
                        width={200}
                        height={50}
                    />
                </div>
                <div className='col-span-6 w-full flex justify-center items-center'>
                    <ul className='flex gap-1'>
                        {
                            Menu.map((item) => (
                                <li className='flex w-full cursor-pointer' key={item.id}>
                                    <p className='
                                        px-5 py-2 
                                        border-b-2 border-transparent 
                                        hover:border-amber-400
                                        font-bold text-[14px]
                                        transition-colors duration-200
                                    '>
                                        {item.title}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-span-3'></div>
            </div>
        </div>
    )
}

export default NavBar
