import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className='w-full  transition-all duration-600 ease-in-out flex flex-col items-center lg:justify-center xl:px-[5%] sm:px-4'>
        <div className=' lg:mx-auto sm:border-x sm:border-gray-200 px-4'>
            <div className='px-4 py-18 lg:px-auto '>
                 <h3 className='text-xs font-semibold text-[#061B31] lg:px-[8%] '>Global GDP running on Stripe:<></></h3>
                <h1 className='text-[34px] md:text-[40px] lg:text-[43.86px] leading-none my-11 w-[95%] sm:w-full md:w-[100%] lg:w-[86%] xl:[70%] lg:px-[8%]'>Finishing infrastructure to grow your revenue.
                    <span className='text-[#40668D] hidden sm:inline'>Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.</span>
                    </h1>

                <div className='flex space-x-2 lg:px-[8%]'>
                     {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className=' flex items-center gap-2 px-5 py-2 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Get started
                    <AnimatePresence mode='wait'>
                        {hovered ? (
                            <motion.span
                        key="icon2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0 }}
                        >
                            <BiRightArrowAlt className='w-4 h-4' />
                        </motion.span>
                        ) : (
                            <motion.span
                        key= "icon1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0 }}
                        >
                            <BiSolidChevronRight className='w-4 h-4' />
                        </motion.span>
                        )}
                    </AnimatePresence>
                    </motion.button>
                        
                    <a href="" className='border border-[#B9B9F9] text-[#573FFD] hover:border-[#6462AA] hover:text-[#4032C8] px-5 py-4 text-center rounded-md font-semibold'><FcGoogle className="inline mr-2" />Sign up with Google</a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero