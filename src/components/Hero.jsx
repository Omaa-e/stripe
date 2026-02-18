import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center lg:justify-center px-4'>
        <div className='mx-4 md:border-x-2 md:border-gray-200 md:mx-auto'>
            <div className=' mx-auto py-18'>
                 <h3 className='text-xs font-semibold text-[#061B31]'>Global GDP running on Stripe:<></></h3>
                <h1 className='text-[1.9rem] leading-tight py-11'>Finishing infrastructure to grow your revenue.
                    <span className='text-[#40668D] hidden md:inline'>Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.</span>
                    </h1>

                <div className='flex space-x-2'>
                    <a href="" className='bg-[#4E6FD8] hover:bg-[#4032C8] text-white px-6 py-4 rounded font-semibold group'>Get started 
                        <span className="ml-2"><BiSolidChevronRight className="inline group-hover:hidden" /></span>
                        <span>
                            <BiRightArrowAlt className="hidden ml-1 group-hover:translate-x-1 transition-transform duration-200 hover:inline" />
                        </span>
                        </a>
                        
                    <a href="" className='border border-[#5e7199] text-[#868E9F] hover:border-[#6462AA] hover:text-[#6462AA] px-5 py-4 text-center rounded-md font-semibold'><FcGoogle className="inline mr-2" />Sign up with Google</a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero