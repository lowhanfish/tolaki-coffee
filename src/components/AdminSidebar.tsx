import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Menu = [
    {
        id: "1",
        title: "Dashboard",
        path: "/secure/dashboard",
        icon: "🏢",
        children: []
    },
    {
        id: "2",
        title: "Profile",
        path: "/secure/profile",
        icon: "👤",
        children: []
    },
    {
        id: "3",
        title: "Products",
        path: "/secure/products",
        icon: "🪹",
        children: []
    },
    {
        id: "4",
        title: "Farmer/Partnership",
        path: "/secure/farmer",
        icon: "👨‍🌾",
        children: [
            {
                id: "4.1",
                title: "Headline & Impact",
                path: "/secure/farmer/headline-impact",
                icon: "",
                children: []
            },
            {
                id: "4.2",
                title: "Stories from the garden",
                path: "/secure/farmer/stories-garden",
                icon: "",
                children: []
            },
            {
                id: "4.3",
                title: "Partnership Standards",
                path: "/secure/farmer/partnership-standards",
                icon: "",
                children: []
            },
        ]
    },
    {
        id: "5",
        title: "News",
        path: "/secure/news",
        icon: "🔖",
        children: []
    },
    {
        id: "6",
        title: "Contact",
        path: "/secure/contact",
        icon: "📧",
        children: []
    },
]

const AdminSidebar = () => {
    return (
        <div className='w-62.5 h-full text-neutral-800 shadow-lg bg-white'>
            <div>
                <Image
                    alt='Card Image'
                    src={`/images/card.webp`}
                    className='object-contain'
                    width={250}
                    height={25}
                />
                <div className='h-10 w-full bg-linear-to-b from-yellow-800/30 to-amber-50 flex items-center'>
                    <p className='text-[12px] pl-6 pr-2 text-white text-shadow-2xs text-shadow-black/40 font-bold p-2 bg-black/20 w-full'>Kiken Sukma Batara</p>
                </div>
            </div>
            <div className='px-5 pt-2 pb-5'>
                {
                    Menu.map((item, index) => (
                        <SideBarItem key={item.id} item={item} />
                    ))
                }

                <div className='div-menu cursor-pointer'>
                    <div className='icon-admin-menu'>🔐</div>
                    <div className='text-admin-menu'>Logout</div>
                </div>
            </div>
        </div>
    )
}


interface MenuItem {
    id: string,
    title: string,
    path: string,
    icon: string,
    children: MenuItem[]
}

interface ItemProps {
    item: MenuItem,
    level?: number;
}


const SideBarItem = ({ item, level = 1 }: ItemProps) => {

    return (
        <div key={item.id} >

            {
                item.children && item.children.length > 0 ? (
                    <>

                        <div className={`div-menu cursor-pointer ${level > 1 && 'py-2.5! pl-5.25!'}`}>
                            <div className='icon-admin-menu'>{item.icon}</div>
                            <div className='text-admin-menu'>{item.title}</div>
                        </div>

                        {
                            item.children.map((item, i) => (
                                <SideBarItem key={item.id} item={item} level={level + 1} />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <Link className='' href={item.path}>
                            <div className={`div-menu cursor-pointer ${level > 1 && 'py-2.5! pl-5.25!'}`}>
                                <div className='icon-admin-menu'>{item.icon}</div>
                                <div className='text-admin-menu'>{item.title}</div>
                            </div>
                        </Link>
                    </>
                )
            }

        </div>
    )
}

export default AdminSidebar