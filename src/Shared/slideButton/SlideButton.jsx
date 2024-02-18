import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr"

const SlideButton = () => {
    return (
        <div className='flex text-gray-500 text-2xl'>
            <IoChevronBackOutline />
            <GrFormNext />
        </div>
    )
}

export default SlideButton