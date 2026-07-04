import React from 'react'

const Menu = [
    { id: 1, title: "Dashboard", pathh: "/secure/dashboard", icon: "🏢" },
    { id: 2, title: "Profile", pathh: "/secure/profile", icon: "👤" },
    { id: 3, title: "Products", pathh: "/secure/products", icon: "🪹" },
    { id: 4, title: "Farmer/Partnership", pathh: "/secure/farmer", icon: "👨‍🌾" },
    { id: 5, title: "News", pathh: "/secure/news", icon: "🔖" },
    { id: 6, title: "Contact", pathh: "/secure/contact", icon: "📧" },
]


const AdminSidebar = () => {
    return (
        <div className='w-62.5 h-full text-neutral-800 shadow-lg bg-white'>
            <div className='px-5 py-5'>
                {
                    Menu.map((item, index) => (

                        <div className='div-menu cursor-pointer' key={index}>
                            <div className='icon-admin-menu'>{item.icon}</div>
                            <div className='text-admin-menu'>{item.title}</div>
                        </div>
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
