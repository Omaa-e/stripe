import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Ready = () => {
    const [hoveredIndex, setHoveredIndex] = useState(false);
  return (
    <div className='w-full xl:px-[9%] sm:px-4 bg-[#F8FAFD]'>
        <div className='sm:border-x sm:border-gray-200 px-4 py-20 border-b border-gray-200'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <div >
                        <h1 className='text-2xl lg:text-[32px] text-[#061B31] '>Ready to get started?</h1>
                         <p className='text-[18px] text-[#50617A]'>Create an account instantly, or contact us to design a <br/> custom package for your business</p>
                    </div>
                    <div className=' py-5 flex gap-2'>
                        <div className='w-full sm:w-auto'>
                                        {/* Buttons */}
                                    <motion.button 
                                    onHoverStart={() => setHoveredIndex(0)}
                                    onHoverEnd={() => setHoveredIndex(false)}
                                    className='w-full sm:w-auto flex items-center justify-center whitespace-nowrap px-5 py-3 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Start now
                                    <AnimatePresence mode='wait'>
                                        {hoveredIndex === 0 ? (
                                            <motion.span 
                                            className=''
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
                                             className='flex items-center'
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
                                <div className='w-full sm:w-auto'>
                                    <div className='w-full sm:w-auto border border-[#BAC8DA] hover:border-[#4032C8] text-center rounded py-3 px-2 '>
                                    <a href="" className='text-[#50617A] hover:text-[#533AFD] text-[14px] font-semibold'>Contact Sales</a>
                                    </div>
                                </div>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2  '>
                    <div>
                            <h3 className='text-lg font-semibold'>See what you'll pay</h3>
                            <p className='text-[#50617A] sm:w-60 md:w-46 lg:w-50 xl:w-62'>Integrated pre-transaction pricing with no hidden fees</p>
    
                        <div className=' flex'>
                                {/* Buttons */}
                            <motion.button 
                            onHoverStart={() => setHoveredIndex(1)}
                            onHoverEnd={() => setHoveredIndex(false)}
                            className=' flex items-center gap-1 py-2 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Pricing details
                            <AnimatePresence mode='wait'>
                                {hoveredIndex === 1 ? (
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
                                
                        </div>
                    </div>
    
                    {/* Second part */}
                    <div>
                            <h3 className='text-lg font-semibold'>Start building</h3>
                            <p className='text-[#50617A] sm:w-67 md:w-46 lg:w-58 xl:w-65'>Get up and running with Stripe in as little as 10 minutes</p>
    
                        <div className=' flex'>
                                {/* Buttons */}
                            <motion.button 
                            onHoverStart={() => setHoveredIndex(2)}
                            onHoverEnd={() => setHoveredIndex(false)}
                            className=' flex items-center gap-2 py-2 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Integration options
                            <AnimatePresence mode='wait'>
                                {hoveredIndex === 2 ? (
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
                                
                        </div>
                    </div>
                </div>
            </div>
           

            
            </div>
        </div>
    </div>
  )
}

export default Ready