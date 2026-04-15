import React from 'react'
import bgimg from '../assets/stripeBg.webp'

const Background = () => {
  return (
    <div className='w-full xl:px-[9%] transition-all duration-600 ease-in-out flex flex-col items-center lg:justify-center sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4'>
            <div className='py-13 lg:py-18'>
            <img src={bgimg} className='h-100 object-cover rounded-lg ' alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Background