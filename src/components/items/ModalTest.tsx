import { Dispatch, SetStateAction, ReactNode } from 'react'

interface ModalTestProps {
    isShow: boolean,
    setIsShow: Dispatch<SetStateAction<boolean>>,
    children: ReactNode
    className?: string
}

const ModalTest = ({ isShow, setIsShow, children, className }: ModalTestProps) => {
    return (
        <>
            {
                isShow && (
                    <div className='bg-black/80 absolute inset-0 z-9 flex justify-center items-center'>

                        <div className={`px-5 relative ${className ? className : 'w-150'}`}>
                            <div className='py-10'>

                                {children}
                            </div>
                            <div
                                className='bg-white shadow-md absolute right-3 top-1 rounded-full h-7 w-7 flex justify-center items-center border-2 border-black cursor-pointer'
                                onClick={() => setIsShow(!isShow)}
                            >
                                <p>✖️</p>
                            </div>

                        </div>
                    </div>
                )

            }
        </>
    )
}

export default ModalTest
