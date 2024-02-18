import React from 'react'
import { IoMdStar } from "react-icons/io";

const HotDealCard = ({ data }) => {
    // console.log('discount', data)

    const { uri: imageUrl } = data.publication.media[0]
    const { title, rating } = data.publication
    const { couponDiscountPrice, couponDiscountRate, discountPrice } = data.publication.priceInfo


    // console.log('discount', rating)

    return (
        <div className=' mx-4 text-sm '>


            <div className='mb-3 relative'>
                <img src={imageUrl} alt="" className='rounded' />
                <div className='absolute bottom-0 left-0'>
                    <p className='bg-[#009EA8] text-white text-xs px-1 py-1 rounded-sm'>Is reuturnable</p>
                </div>
            </div>
            <div className='text-left'>
                <h3>{title}</h3>

                <div className='font-bold flex gap-1'>
                    {couponDiscountRate && <span className='text-red-400'>{couponDiscountRate} %</span>}

                    {!couponDiscountRate && <span className=''>{discountPrice} </span>}

                    <span>{couponDiscountPrice}</span>

                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <IoMdStar />
                    <span>{rating}</span>

                </div>

            </div>
        </div>
    )
}

export default HotDealCard