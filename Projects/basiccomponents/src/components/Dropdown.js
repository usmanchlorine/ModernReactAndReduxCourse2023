import React, { useState } from 'react'
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
export default function Dropdown({ options, selected, SetSelected }) {
    const [toggle, setToggle] = useState(false)


    const handleOptionClick = (option) => {
        SetSelected(option)
        setToggle(!toggle)

    }
    const dropdown = options.map((option) => {
        return <span className="font-semibold border cursor-pointer shadow-sm shadow-neutral-900 border-black" onClick={() => { handleOptionClick(option) }}>{option.label}</span>
    })
    // console.log(options.map(option => <span>{option.label}<span/>))


    return (
        <div className=" ml-1  bg-amber-500 md:w-max sm:w-max shadow-sm shadow-black  relative ">
            <div className="flex justify-between gap-2  px-3  py-1 rounded-sm sm:text-lg md:text-xl font-semibold">
                <span>{selected.label}</span>
                <span className='mt-1' onClick={() => setToggle(!toggle)} >{!toggle ? <BsFillArrowDownSquareFill /> : <BsFillArrowUpSquareFill />}</span>
            </div>

            <div className="flex flex-col left-0 w-full absolute bg-amber-300">
                {
                    toggle && dropdown
                }

            </div>



        </div>
    )
}
