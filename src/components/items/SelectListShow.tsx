import React from 'react'


interface InputFieldProps {
    title?: string
    onChange?: (value: string | number) => void
    size?: string
}

const InputSelectMaps: Record<string, string> = {
    sm: "input-select-sm",
    md: "input-select",
}

const SelectListShow = ({ title, onChange, size }: InputFieldProps) => {

    const Option = [8, 24, 56, 144, 240, 400]


    return (
        <div className='flex w-full flex-col' >
            <p className={`text-[11px] font-bold text-neutral-400 ${title ? 'block' : 'hidden'}`} >{title}</p>
            <select
                onChange={(e) => {
                    onChange && onChange(e.target.value)
                }}
                className={`${size ? InputSelectMaps[size] : 'input-select'} w-full`}>
                {
                    Option.map((data, index) => (
                        <option key={index} value={data}>{data} - Data Tampil</option>
                    ))
                }

            </select>
            {/* <input
                className="input-field w-full"
                value={value}
                onChange={(e) => {
                    onChange && onChange(e.target.value)
                }}
            /> */}
        </div>
    )
}

export default SelectListShow
