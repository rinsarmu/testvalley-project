import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSearch, MdFileDownload } from "react-icons/md";
import SectionWrap from '../SectionWrap';

import downloadBtn from '../../assets/Image/home-event.svg'

const Navbar = () => {
    return (
        <div className='text-black w-full border-b border-gray-300'>

            {/* Nav section */}
            <nav className='flex items-center justify-center w-full bg-white'>
                <SectionWrap>
                    <div className='w-full  flex justify-between gap-4  py-3'>


                        {/* Logo */}
                        <div className='text-green-500 flex justify-between items-center gap-6'>
                            <div className='w-[128px] h-[25px] mr-[20px]'>

                                <img src={`https://www.testvalley.kr/logo/logo-new.svg`} alt="" />
                            </div>


                            {/* Hamburger */}
                            <div className='flex items-center gap-3'>
                                <GiHamburgerMenu />
                                <p> 카테고리</p>
                            </div>

                            {/* hamburger description */}

                        </div>
                        {/* Searcha area */}

                        <div className='border border-gray-300 py-2 px-4   cursor-text flex items-center rounded'>
                            <MdOutlineSearch />
                            <input type="text" className='bg-inherit outline-none text-black w-[260px]' placeholder='살까말까 고민된다면 검색해보세요!' />


                        </div>

                        <div className='flex items-center gap-3 text-black'>

                            {/* download button */}
                            <span>
                                <img src={downloadBtn} alt="" />
                            </span>


                            {/* Down description */}
                            <p> 로그인 / 회원가입</p>

                        </div>

                    </div>
                </SectionWrap>
            </nav>

        </div>
    )
}

export default Navbar