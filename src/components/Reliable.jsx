import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Reliable = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className='w-full xl:px-[5%] px-4 bg-[#0D1738] '>
        <div className='sm:border-x sm:border-[#182659] sm:px-4 pt-13 lg:pt-20 h-screen '>
            <div className='pl-0 border-b border-[#182659] pb-9'>
                <div className=''>
                    <h2 className='text-white text-[22px] md:text-[28px] font-semibold leading-7'>Reliable, extensible infrastructure for every stack. <span className='text-[#839BC8]'> Adapt Stripe to your business needs with flexible integration options.</span></h2>
                
                </div>
                <div className='flex space-x-2 mt-5 text-[13px] md:text-[16px] lg:text-[17px]'>
                    {/* Buttons */}
                    <motion.button 
                     onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className=' flex items-center px-3 md:px-8 py-2 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>View developer docs
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
                    
                    <a href="" className=' text-white border border-[#573FFD]  hover:border-[#4032C8] px-5 md:px-8 py-4 text-center rounded-md font-semibold'>View Stripe's GitHub</a>
                </div>
            </div>

            <div>
                <h3 className='text-white sm:w-[94%] sm:text-[22px] md:text-[22px] leading-7 pt-10'>
                    connect to existing systems. 
                    <span className='text-[#839BC8]'>
                        Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations.
                    </span>
                </h3>
            </div>
            
        </div>
    </div>
  )
}

export default Reliable