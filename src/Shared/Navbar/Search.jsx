import React from 'react'

const Search = () => {
    return (
        <div className='lg:w-96 w-full  lg:block z-0'>
            <input type="text" className='rounded-[20px] px-4  py-[6px] w-full placeholder:lg:text-gray-500 placeholder:text-black placeholder:font-medium text-black/90 outline-none' placeholder='Search Artists, Songs, Albums Videos' />
        </div>
    )
}

export default Search