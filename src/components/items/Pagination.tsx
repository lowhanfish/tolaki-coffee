import { useEffect, useState } from 'react'

interface PaginationProps {
    total: number,
    limit: number,
}

const Pagination = ({ total, limit }: PaginationProps) => {

    const [start, setStart] = useState(1)
    const [data, setData] = useState(1)
    const [dataLengt, setDataLength] = useState(2)
    const [arr, setArr] = useState<number[]>([])

    const setArrData = () => {
        var newArr: any[] = [];
        if ((Math.ceil(total / limit)) > limit) {
            newArr = Array.from({ length: limit }, (_, index) => start + index);
        } else {
            newArr = Array.from({ length: Math.ceil(total / limit) }, (_, index) => start + index);
        }
        setArr(newArr)
    }

    const next = () => {
        data < dataLengt && setData(data + 1)
        if (data % limit == 0) {
            setStart(data + 1);
            setArrData()
        }
    }
    const prev = () => {
        if (data > 1) {
            setData(data - 1)
            if (data % limit === 1) {
                setStart(data - limit);
                setArrData()
            }
        }
    }

    useEffect(() => {
        setDataLength(Math.ceil(total / limit))
        setArrData();
    }, [dataLengt, limit, start, data])

    return (

        <div>
            {/* {data} */}
            <div className='flex gap-1'>
                <button
                    onClick={() => { prev() }}
                    className='bg-neutral-600/80 hover:bg-neutral-600 flex justify-center items-center p-1 rounded-sm shadow-sm border border-amber-600/20 cursor-pointer min-h-3 min-w-10'>
                    <span className='text-white text-[12px] rotate-270'>⏏︎</span>
                </button>

                {
                    data > limit && (
                        <>
                            <button
                                onClick={() => {
                                    setData(1);
                                    setStart(1);
                                    setArrData();
                                }}
                                className={`
                                    ${data == 1 ? 'bg-amber-500' : 'bg-neutral-600/30'} hover:bg-neutral-600/60 
                                    flex justify-center items-center 
                                    p-1 min-h-3 min-w-7
                                    rounded-full shadow-sm 
                                    cursor-pointer
                                `}
                            >
                                <span className='text-white text-[10px]'>1</span>
                            </button>

                            <button className='bg-neutral-600/10 hover:bg-neutral-600/20 flex justify-center items-center p-1 rounded-full shadow-sm cursor-pointer min-h-3 min-w-7'>
                                <span className='text-neutral-800 text-[10px]'>...</span>
                            </button>
                        </>
                    )
                }


                {
                    arr.map((item, index) => (
                        <button key={index}
                            onClick={() => setData(item)}
                            className={`
                            ${data == item ? 'bg-amber-500' : 'bg-neutral-600/30'} hover:bg-neutral-600/60
                            flex justify-center items-center 
                            p-1 min-h-3 min-w-7
                            rounded-full shadow-sm cursor-pointer`}>
                            <p className='text-white text-[10px]'>{item}</p>
                        </button>
                    ))
                }

                {
                    data <= (dataLengt - limit) && (
                        <>
                            <button className='bg-neutral-600/10 hover:bg-neutral-600/20 flex justify-center items-center p-1 rounded-full shadow-sm cursor-pointer min-h-3 min-w-7'>
                                <span className='text-neutral-800 text-[10px]'>...</span>
                            </button>
                            <button
                                onClick={() => {
                                    setData(dataLengt)
                                    setStart(dataLengt - (limit - 1));
                                    setArrData();
                                }}
                                className={`
                                    ${data == dataLengt ? 'bg-amber-500' : 'bg-neutral-600/30'} hover:bg-neutral-600/60 
                                    flex justify-center items-center 
                                    p-1 min-h-3 min-w-7
                                    rounded-full shadow-sm 
                                    cursor-pointer
                                `}
                            >
                                <span className='text-white text-[10px]'>{dataLengt}</span>
                            </button>
                        </>
                    )
                }
                <button
                    onClick={() => { next() }}
                    className={`
                    bg-neutral-600/80 
                    hover:bg-neutral-600 
                    flex justify-center items-center 
                    p-1 min-h-3 min-w-10
                    rounded-sm shadow-sm  
                    cursor-pointer
                    `}>
                    <span className='text-white text-[12px] -rotate-270'>⏏︎</span>
                </button>

            </div>
        </div>
    )
}

export default Pagination
