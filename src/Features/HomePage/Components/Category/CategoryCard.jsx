import React from 'react'

const CategoryCard = ({ data }) => {
    return (
        <div className='flex flex-col gap-2 text-sm'>

            {/* Icon */}
            <div>
                <img src={data.imageUrl} className='w-16' alt="" />
            </div>

            {/* title */}
            <p>{data.title}</p>
        </div>
    )
}

export default CategoryCard