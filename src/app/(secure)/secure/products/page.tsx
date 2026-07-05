import Image from "next/image"


const page = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='bg h-15'>
                sad
            </div>

            <div className='flex-1 mt-2'>
                <div className="grid grid-cols-12 gap-2">
                    {
                        [...Array(80)].map((data, index) => (
                            <div key={index} className="col-span-3 p-2 border border-neutral-300 rounded-sm">
                                <div className="relative h-40">
                                    <Image
                                        alt="Image Product"
                                        src={`/images/kopi3.png`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p>Nama Produk</p>
                                    <p>Stock : <span>150</span></p>
                                    <p>@150.000/200mg</p>
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
