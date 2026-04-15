import {React,useState} from 'react'
import img1 from "../assets/hertsRoad.png"
import img2 from "../assets/URBN image.png"
import img3 from "../assets/instacart.png"
import img4 from "../assets/Monte.png"
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Herts = () => {
  const [hovered, setHovered] = useState(false);

//   const realize = [
//     {
//         p: "",
//         button: "view services"
//     },
//   ]
  return (

    <div className='  w-full xl:px-[9%] sm:px-4'>
        <div className="sm:border-x sm:border-gray-200 px-4 ">
            <div className='justify-between'>
                <div>
                    <img src="" alt="" />
                    <h1>Hertz unifies commerce with Stripe</h1>
                </div>
                

                {/* Button */}
            </div>

            <div>
                <img src={img1} className='w-full object-cover rounded-lg' alt="" />
            </div>
            <div className=' block md:flex mx-auto pt-5 pb-10  '>
                <p className='text-s'>160 <span className='text-[#627188] md:text-[#7F8C9E]'>countries</span> </p>
                <p className='text-s'>11K+ <span className='text-[#627188] md:text-[#7F8C9E]'>locations globally </span></p>
                <p className='text-s'>Products used <span className='text-[#627188] md:    text-[#7F8C9E]'>payments, Terminal, Connect, Radar and Stripe Sigma</span> </p>
            </div>


            {/* Second part */}
            <div className='justify-between'>
                <div>
                    <img src="" alt="" />
                    <h1>URBN consolidation $5 billion in online and in-store revenue onto Stripe </h1>
                </div>
                

                {/* Button */}
            </div>

            <div>
                <img src={img2} className='w-full object-cover rounded-lg' alt="" />
            </div>
            <div className=' block md:flex justify-between mx-auto pt-5 pb-10  '>
                <p className='text-s'>5+ <span className='text-[#627188] md:text-[#7F8C9E]'>consumer brands in retail portfolio </span> </p>
                <p className='text-s'>700+ <span className='text-[#627188] md:text-[#7F8C9E]'>store locations </span></p>
                <p className='text-s'>Products used <span className='text-[#627188] md:text-[#7F8C9E]'>payments, Terminal, Connect, Stripe Sigma and Radar</span> </p>
            </div>
            
            {/* Third part */}
            <div className='justify-between'>
                <div>
                    <img src="" alt="" />
                    <h1>Instacart powers online grocery delivery with Stripe</h1>
                </div>
                

                {/* Button */}
            </div>

            <div>
                <img src={img3} className='w-full object-cover rounded-lg' alt="" />
            </div>
            <div className=' block md:flex justify-between mx-auto pt-5 pb-10  '>
                <p className='text-s'>600K+ <span className='text-[#627188] md:text-[#7F8C9E]'>shoppers</span> </p>
                <p className='text-s'>1.8K <span className='text-[#627188] md:text-[#7F8C9E]'>retail partners across nearly 100K stores </span></p>
                <p className='text-s'>Products used <span className='text-[#627188] md:    text-[#7F8C9E]'>Payments, Connect, Data Pipeline and Issuing</span> </p>
            </div>
            
            {/* fourth part */}
            <div className='justify-between'>
                <div>
                    <img src="" alt="" />
                    <h1>Le monde improves local and international payments with Stripe </h1>
                </div>
                

                {/* Button */}
            </div>

            <div>
                <img src={img4} className='w-full object-cover rounded-lg' alt="" />
            </div>
            <div className=' block md:flex justify-between mx-auto pt-5 pb-10  '>
                <p className='text-s'>100 <span className='text-[#627188] md:text-[#7F8C9E]'>of digital and print payments powered by Stripe </span> </p>
                <p className='text-s'>Less than 3 months  <span className='text-[#627188] md:text-[#7F8C9E]'>to implement and go live   </span></p>
                <p className='text-s'>Products used <span className='text-[#627188] md:    text-[#7F8C9E]'>payments, Stripe Sigma and Radar</span> </p>
            </div>
        </div>

        {/* realize div */}
        <div className='sm:border-x sm:border-gray-200 px-4 border-b border-gray-200'>
            <h1 className='pb-7 text-3xl'>Realize value faster with dedicated experts</h1>

          <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pr-10 md:gap-10  '>
                <div>
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

export default Herts