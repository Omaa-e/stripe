import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Happening = () => {
    const [hovered, setHovered] = useState(null)
  return (
    <div className='w-full xl:px-[9%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4 border-b border-gray-200 pt-15'>
            <div className='text-[22px] md:text-[28px] xl:text-[33px] leading-7'>
                <h1>What's hapening</h1>
                <p className='text-[#64748D]'>See the latest from Stripe</p>
            </div>


            <div className='pt-5 text-[20px] md:text-[22px] flex flex-col lg:flex-row lg:justify-between text-[#061B31]'>
                <h1 className='text-[20px]md:text-[22px] text-[#061B31]'>Businesses on Stripe generated $1.9T in 2025.
                    <span className='text-[#64748D]'>Our annual letter explores the trends defining the internet economy—including steeper growth for newer businesses, faster international expansion, stablecoin progress, agentic commerce, and more.</span>
                </h1>

                <div className='font-semibold'>
                        {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHovered(2)}
                    onHoverEnd={() => setHovered(null)}
                    className=' w-full sm:w-auto flex text-[#533AFD] font-semibold hover:text-[#4032C8] rounded px-4 border border-gray-200 text-[16px]'>Read the letter
                    <AnimatePresence mode='wait'>
                        {hovered === 2 ? (
                            <motion.span
                        key="icon2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0 }}
                        >
                            <BiRightArrowAlt className='w-4 h-7' />
                        </motion.span>
                        ) : (
                            <motion.span
                        key= "icon1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0 }}
                        >
                            <BiSolidChevronRight className='w-4 h-7' />
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

export default Happening