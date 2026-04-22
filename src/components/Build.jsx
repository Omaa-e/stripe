import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/lovable.png"

const Build = () => {
     const [hoveredIndex, setHoveredIndex] = useState(false);

     const carousel =[
        {},
     ]
  return (
    <div className=' w-full xl:px-[5%] sm:px-4 '>
        <div className='sm:border-x sm:border-gray-200 px-4 py-10 border-b border-gray-200'>
            <div>
                <div className=' xl:flex flex-row xl:justify-between'>
                <h3 className='text-[20px] md:text-3xl text-[#061B31]  tracking-tighter '>Build a foundation for your startup that enables faster growth</h3>
                 <p className=' text-[#50617A] pb-5 pt-2 md:pb-0 md:pt-0 text-xl tracking-tighter xl:w-125 '>From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps startups build what's next on easy-to-integrate financial infrastructure.</p>
            </div>
            </div>

             <div className=''>
                        {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHoveredIndex(0)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className='w-full sm:w-auto flex items-center justify-center whitespace-nowrap px-5 py-3 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Stripe for startups
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

                    {/* Carousel */}
            <div className='pt-5'>
                         <div className=''> 
                    <div className='w-112 sm:w-150 md:w-56  lg:w-78 xl:w-115 relative'>
                        <img className='w-full h-auto rounded' src={img1} alt="" />

                        <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold">Lovable</h1>
                    </div>
                <div className='pl-2 pt-2'>
                    <p className='text-[#262424]'>Lovable grows into vibe-coding juggernaut with Stripe</p>
                    <div className=''>
                                            {/* Buttons */}
                                        <motion.button 
                                        onHoverStart={() => setHoveredIndex(1)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                        className=' w-full sm:w-auto flex gap-1  py-3 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Read Lovable's story
                                        <AnimatePresence mode='wait'>
                                            {hoveredIndex === 1 ? (
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


{/* Stripe Startups program */}
            <div className='flex flex-col sm:flex-row gap-4'>
                 <div className='bg-[#F8FAFD] border border-gray-300 py-5 px-3 rounded-md text-[16px] w-full '>
                <div className=''>
                    <h2 className=''> Stripe Startups program.
                        <span className='text-[#586880]'>Access financial benefits, a focused community, and experts resources to help you grow your business.</span></h2>
                </div>


                 <div className='font-semibold'>
                        {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHoveredIndex(2)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className=' w-full sm:w-auto flex text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Apply now
                    <AnimatePresence mode='wait'>
                        {hoveredIndex === 2 ? (
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

                {/* Second one */}
            </div>
                 <div className='bg-[#F8FAFD] border border-gray-300 py-5 px-3 rounded-md w-full text-[16px]'>
                <div>
                    <h2> Stripe Atlas.
                        <span className='text-[#586880]'>Incorporate and get everything you need to fundraise,bank and accept payments in two business days.</span></h2>
                </div>


                 <div className=''>
                        {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHoveredIndex(2)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className=' w-full sm:w-auto flex text-[#533AFD] font-semibold hover:text-[#4032C8] rounded text-[16px]'>Start your company
                    <AnimatePresence mode='wait'>
                        {hoveredIndex === 2 ? (
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
    </div>
  )
}

export default Build