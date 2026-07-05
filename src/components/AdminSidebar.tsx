import Link from 'next/link'
import React from 'react'

const Menu = [
    { id: 1, title: "Dashboard", path: "/secure/dashboard", icon: "🏢" },
    { id: 2, title: "Profile", path: "/secure/profile", icon: "👤" },
    { id: 3, title: "Products", path: "/secure/products", icon: "🪹" },
    { id: 4, title: "Farmer/Partnership", path: "/secure/farmer", icon: "👨‍🌾" },
    { id: 5, title: "News", path: "/secure/news", icon: "🔖" },
    { id: 6, title: "Contact", path: "/secure/contact", icon: "📧" },
]

const AdminSidebar = () => {
    return (
        <div className='w-62.5 h-full text-neutral-800 shadow-lg bg-white'>
            <div className='px-5 py-5'>
                {
                    Menu.map((item, index) => (
                        <Link key={index} className='' href={item.path}>
                            <div className='div-menu cursor-pointer'>
                                <div className='icon-admin-menu'>{item.icon}</div>
                                <div className='text-admin-menu'>{item.title}</div>
                            </div>
                        </Link>
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

export default AdminSidebar