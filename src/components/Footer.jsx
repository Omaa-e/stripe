import React from 'react'
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' w-full xl:px-[9%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4'>
            <div>
                <h2 className='text-[#533AFD] hover:text-[#2E2B8C] text-semibold text-[16px] flex text-center'><TbWorld className='w-5 h-5 mr-1'/> United States <span>(English)</span></h2>
                <p className='text-[#061B31] text-[16px] text-semibold'>&copy;{new Date().getFullYear()} Stripe, LLC.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer