import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/Saas.png"

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
                <p className='text-[#586880] text-xl tracking-tighter md:w-125'>From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services. </p>
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
            {/* image */}
            <div>
                <img className='w-full' src={img} alt="" />
            </div>

            <div>
            
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:pr-10 md:gap-10  '>
                    <div>
                        <div className='border border-gray-200 rounded-lg p-5 mb-5 flex items-center justify-center w-12 h-12 bg-[#F9F9FF]'>
                            <MdOutlineRocketLaunch className='w-8 h-8  ' />
                        </div>
                        
                            <p className=''>Professional services. <span className='text-[#50617A]'>Get tailored guidance from Stripe on implementation, complex integration, or major migration</span></p>
    
                        <div className=' flex'>
                                {/* Buttons */}
                            <motion.button 
                            onHoverStart={() => setHovered(true)}
                            onHoverEnd={() => setHovered(false)}
                            className=' flex items-center gap-1 py-2 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>View services
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
                                
                        </div>
                    </div>
    
                    {/* Second part */}
                    <div>
                            <p>Stripe-certified experts. <span className='text-[#50617A]'>Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.</span></p>
    
                        <div className=' flex'>
                                {/* Buttons */}
                            <motion.button 
                            onHoverStart={() => setHovered(true)}
                            onHoverEnd={() => setHovered(false)}
                            className=' flex items-center gap-2 py-2 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>View partners
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
                                
                        </div>
                    </div>
    
                    {/* Third part */}
                    <div>
                            <p className='text-md'>Support plans. <span className='text-[#50617A]'>Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.</span></p>
    
                        <div className=' flex'>
                                {/* Buttons */}
                            <motion.button 
                            onHoverStart={() => setHovered(true)}
                            onHoverEnd={() => setHovered(false)}
                            className=' flex items-center gap-2 py-2 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>View plans
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
                                
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Saas