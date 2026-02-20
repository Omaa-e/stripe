import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className='w-full md:border-x-1 md:border-gray-200  '>
        <div className='grid  items-center lg:mx-auto lg:justify-center'>
            {/* this div contains the main contents of the page, where all the texts are being written */}
            <div className='px-4 py-18 lg:px-auto'>
                 <h3 className='text-xs font-semibold text-[#061B31]'>Global GDP running on Stripe:<></></h3>
                <h1 className='text-[2.0rem] lg: leading-tight py-11'>Finishing infrastructure to grow your revenue.
                    <span className='text-[#40668D] hidden sm:inline'>Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.</span>
                    </h1>
{/* this div contains the buttons and frame motion is used here to enable the smooth transition in the get started button */}
                <div className='flex space-x-2'>
                     

                    <motion.button 
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className=' flex items-center gap-2 px-6 pt-3 pb-3.5 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Get started
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
                    {/* Sign up google tag with the icon */}
                        
                    <a href="" className='border border-[#B9B9F9] text-[#573FFD] hover:border-[#6462AA] hover:text-[#4032C8] px-5 py-4 text-center rounded-md font-semibold'><FcGoogle className="inline mr-2" />Sign up with Google</a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero