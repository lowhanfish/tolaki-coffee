import React from 'react'


interface InputFieldProps {
    title?: string
    onChange: (value: string | number) => void
    value: string | number
}

const InputtextArea = ({ title, onChange, value }: InputFieldProps) => {



    return (
        <div className='flex w-full flex-col' >
            <p className={`text-[11px] font-bold text-neutral-400 ${title ? 'block' : 'hidden'}`} >{title}</p>

            <textarea
                className="input-textarea"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

        </div>
    )
}

export default InputtextArea
