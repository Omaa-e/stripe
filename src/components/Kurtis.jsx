import React from 'react'
import img1 from '../assets/Kurtis.webp'

const Kurtis = () => {
  return (
    <div className='w-full xl:px-[9%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4'>
            <div className='text-center flex flex-col items-center justify-center'>
                <img className='mb-4' src={img1} alt="" />
                <h1 className='text-2xl text-center text-[#64748D] space-y-5  px-4 mx-7 md:mx-24 xl:mx-30 mx-auto'>"With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world."</h1>
                <p className='mt-6 mb-7'>Kurtis Moyer <span className='text-[#64748D]'>Lead Product Manager of Payments Minbody</span>
                </p>

                 <div className=''>
                                            {/* Buttons */}
                                        <motion.button 
                                        onHoverStart={() => setHoveredIndex(1)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                        className=' w-full sm:w-auto flex gap-1  py-3 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Read the story
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
  )
}

export default Kurtis