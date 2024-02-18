import React, { useEffect, useRef, useState } from 'react';
import { getArrangedDiscounts } from '../../../../assets/Js/api';
import HotDealCard from './HotDealCard';
import HotDealSwiper from './HotDealSwiper';
import SlideButton from '../../../../Shared/slideButton/SlideButton';

const HotDeal = () => {
    const [discounts, setDiscounts] = useState([]);
    const [discountedItems, setDiscountedItems] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getArrangedDiscounts();
                if (!response.data) return;
                const { data } = response;

                const filteredData = data.items.filter(
                    item => item.type === 'SINGLE' && item.viewType === 'TILE'
                );

                console.log(filteredData[0])
                setDiscounts(filteredData[0]);
                setDiscountedItems(filteredData[0].items)
            } catch (error) {
                console.error('Error fetching discounts:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            <div className='flex  w-full mb-12'>
                {/* Left section */}
                <div className='w-48 text-[14px] flex flex-col justify-between'>
                    <div>
                        <h2 className='text-[24px]'>{discounts?.title}</h2>
                        <span>{discounts?.subtitle}</span>

                    </div>

                    <SlideButton />
                </div>

                {
                    discountedItems && discountedItems.length > 0 && <div className='basis-4/5 overflow-x-auto w-full py-4 '>
                        <HotDealSwiper data={discountedItems} />
                    </div>
                }

            </div>
        </div>
    );
};

export default HotDeal;