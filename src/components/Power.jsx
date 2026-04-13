import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Power = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className='sm:border-x sm:border-gray-200 sm:px-4'>
        <div className=''>
            <div className=' border-b border-gray-200 py-10'>
                <h1 className='text-2xl lg:text-3xl lg:w-[70%] '>Powering businesses of all sizes.
                    <span className='text-[#687790]'>Run your business on a reliable platform that adapts to your needs</span>
                </h1>
            </div>

            <div className='py-15'>
                <div className='px-2 md:flex flex-row md:justify-between'>
                <h2 className='text-2xl w-90 tracking-tighter'>
                    Transform your enterprise with agile fragile infrastructure
                </h2>
                <p className='text-[#586880] text-xl tracking-tighter w-125'>50% of fortune 100 companies have used stripe to grow their businesses from expanding internationally to reimagining the customer experience  </p>
            </div>

    <div className=''>
                        {/* Buttons */}
                    <motion.button 
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className=' w-full sm:w-auto flex items-center justify-center whitespace-nowrap gap-1 px-5 py-3 bg-[#533AFD] font-semibold hover:bg-[#4032C8] text-white rounded'>Stripe for enterprises
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
  )
}

export default Power