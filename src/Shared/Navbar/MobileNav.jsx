import React from 'react'
import Search from './Search';
import { RxHamburgerMenu } from "react-icons/rx";
import logoImg from "../../assets/Image/logo.svg";

const MobileNav = () => {
    return (
        <div className='bg-[#121212] lg:border-b border-gray-500 w-full   text-white lg:hidden '>
            <div className='flex flex-row justify-start items-center gap-6 fixed z-40 bg-[#121212] '>
                <div className='flex justify-start items-center gap-2 py-2'>
                    <div className='md:hidden ml-4 mr-3'>
                        <RxHamburgerMenu color='white' size={32} />
                    </div>
                    <div className='h-10'>
                        <img src={logoImg} alt="" className=" w-[100px] lg:w-[150px] h-full " />
                    </div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <button className='rounded-[24px]  px-2   bg-inherit  md:block border border-white py-[3px] '>GetBcoins</button>
                    <button className='rounded-[24px]  px-3  bg-inherit  md:block border border-white  py-[3px]'>Get APP</button>
                </div>
            </div>



            {/* Search */}
            <div className='md:pt-10 pt-5 hidden'>
                <div className='text-white flex flex-row gap-4 items-center justify-end  w-full pl-[160px] md:pl-[240px] fixed top-2 left-0  '>
                    <div className='flex gap-2 md:gap-3 justify-start md:justify-center items-center text-white md:text-black/90 font-medium pr-8 w-full  '>


                        <button className='rounded-[24px]  px-2   bg-inherit  md:block border border-white py-[3px] '>GetBcoins</button>
                        <button className='rounded-[24px]  px-3  bg-inherit  md:block border border-white  py-[3px]'>Get APP</button>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default MobileNav