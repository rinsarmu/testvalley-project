import React from 'react'

const MusicHeader = ({ header }) => {
  return (
    <h1 className='mb-2 mt-1 font-bold font-nunito text-white text-[22px]' style={{ fontFamily: 'nunito' }}>{header}</h1>
  )
}

export default MusicHeader