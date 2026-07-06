import React from 'react'


interface InputFieldProps {
    title?: string
    type: string,
}

const InputField = ({ title, type }: InputFieldProps) => {



    return (
        <div className='flex w-full flex-col' >
            <p className={`text-[11px] font-bold text-neutral-400 ${title ? 'block' : 'hidden'}`} >{title}</p>
            <input className="input-field w-full" type={type} />
        </div>
    )
}

export default InputField
