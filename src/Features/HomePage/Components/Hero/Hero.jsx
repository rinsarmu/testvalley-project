import React, { useEffect, useRef, useState } from 'react'
import HeroCard from './HeroCard'
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { getBanners } from '../../../../assets/Js/api';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {

    const [banners, setBanners] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await getBanners();
            setBanners(response.data)
            console.log(banners)
        };
        fetchData();

    }, [])
    return (
        <div>
            <div className='relative'>
                {banners && banners.length > 0 && <HeroCard data={banners} />}
            </div>
        </div>
    )
}

export default Hero