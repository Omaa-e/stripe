import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Saas = () => {
    const [hovered, setHovered]= useState(false)
  return (
    <div className='w-full xl:px-[9%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4'>
            <div className='py-15'>
                <div className=' md:flex flex-row md:justify-between'>
                <h2 className='text-2xl w-90 tracking-tighter'>
                    Make your Saas platform a complete financial operating system 
                </h2>
                <p className='text-[#586880] text-xl tracking-tighter w-125'>From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services. </p>
            </div>
             {/* Buttons */}
                <div className=''>
                <motion.button 
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className=' w-full sm:w-auto flex items-center justify-center whitespace-nowrap px-5 py-3 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Stripe for platforms
                <AnimatePresence mode='wait'>
                    {hovered ? (
                        <motion.span
                    key="icon2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0 }}
                    >
                        <BiRightArrowAlt className='w-4 h-8' />
                    </motion.span>
                    ) : (
                        <motion.span
                    key= "icon1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0 }}
                    >
                        <BiSolidChevronRight className='w-4 h-8' />
                    </motion.span>
                    )}
                </AnimatePresence>
                </motion.button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Saas