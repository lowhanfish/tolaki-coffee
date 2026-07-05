import Image from "next/image"

const List = [
    { id: 3, title: "Arabica Coffee", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi3.png" },
    { id: 1, title: "Tubruk Robusta", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi1.png" },
    { id: 4, title: "Kopi Tolaki", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi4.png" },
    { id: 2, title: "Tolaki Robusta", subtitle: "Medium Roast", stock: 12, price: 85000, vol: "200gr", img: "/images/kopi2.png" },
]

const page = () => {
    return (
        <div className='relative'>
            <div className='bg h-15 grid grid-cols-3 px-3'>
                <div className="col-span-1 flex items-center w-full">
                    <div className="form-input">
                        <input className="input-form" type="text" />
                        <button className="btn-form">
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
                                    <div className="h-7 w-7 flex justify-center items-center absolute right-1 top-1 bg-amber-200 rounded-full cursor-pointer z-1 border-2 border-white">
                                        <span className="text-16px">⚙️</span>
                                    </div>
                                    <Image
                                        alt="Image Product"
                                        src={item.img}
                                        fill
                                        className="object-cover"
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
        </div>
    )
}

export default page
