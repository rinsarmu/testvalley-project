import React, { useState, useEffect } from 'react'
import { getArrangedDiscounts } from '../../../../assets/Js/api';
import HotDealSwiper from '../HotDeal/HotDealSwiper';
;
import SlideButton from '../../../../Shared/slideButton/SlideButton';
const Products = () => {
    const [discounts, setDiscounts] = useState([]);
    const [discountedItems, setDiscountedItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getArrangedDiscounts();
                if (!response.data) return;
                const { data } = response;

                const filteredData = data.items.filter(
                    item => item.type === 'SINGLE' && item.viewType === 'TILE'
                );

                setDiscounts(filteredData.slice(1));
            } catch (error) {
                console.error('Error fetching discounts:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='flex flex-col gap-12'>

            {
                discounts && discounts.length > 0 && discounts.map(disc => (
                    <div className='flex  w-full'>
                        {/* Left section */}
                        <div className='w-48 text-[14px] flex flex-col justify-between'>
                            <div>
                                <h2 className='text-[22px]'>{disc?.title}</h2>
                                <span>{disc?.subtitle}</span>
                            </div>
                            <SlideButton />
                        </div>

                        {
                            <div className='basis-4/5 overflow-x-auto w-full py-4 '>
                                <HotDealSwiper data={disc.items} />
                            </div>
                        }
                    </div>
                ))}



        </div>
    );
};


export default Products