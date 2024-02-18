import React from 'react';
import { MdHeadset } from 'react-icons/md';
import { IoPlaySharp } from "react-icons/io5";
import musicCover from '../../../assets/Image/musician.jpg';

const MusicCard = ({ body: data }) => {
    return (
        <div className='min-w-[200px] h-40 bg-cover group relative rounded' style={{ backgroundImage: `url(${data && data.cover ? data.cover : musicCover})` }}>
            <div className='flex absolute bottom-0 left-0 items-center  text-white bg-gradient-to-b from-gray-500/5 to-gray-900/50 w-full '>
                {/* Headset Icon */}
                <div className="mr-2">
                    <MdHeadset />
                </div>
                {/* Number of Views */}
                <div> {data && data.listened ? data.listened : '34'}</div>
            </div>

            <div className='hidden group-hover:absolute top-0 left-0 w-full hover:bg-black/20 h-full transition-all duration-500 group-hover:flex justify-center items-center group'>
                <div className='rounded-full hidden group-hover:flex justify-center items-center p-4 w-fit bg-white/20 transition-all duration-500'>
                    <IoPlaySharp className='text-[40px] text-white' />
                </div>
            </div>
        </div>
    );
}

export default MusicCard;
