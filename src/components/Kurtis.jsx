import {React,useState} from 'react'
import { BiSolidChevronRight } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/Kurtis.webp'

const Kurtis = () => {
    const testimonials = [
  {
    id: "mindbody",
    image1: "/mindbody",
    text: "With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.",
    name: "Kurtis Moyer",
    role: "Lead Product Manager of Payments, Mindbody",
    image2: "/jobber.jpg",
  },
  {
    id: "jobber",
    image1: "/mindbody.jpg",
    text: "Without Stripe, it would have taken significant time and engineering effort to offer these resources to our customers. The financial infrastructure Stripe offers is incredibly valuable to Jobber, and we look forward to seeing what comes next.",
    name: "Laura Collinson",
    role: " Director of Fintech, Jobber",
    image2: "/jobber.jpg",
  },
  {
    id: "substack",
    image1: "Substack",
    text: "Stripe makes the subscriptions and payment piece really easy for everyone involved. And that helps us make it easy for writers and other creators to do the work they want to do on Substack and get paid for it.",
    name: "Seth McMillan",
    role: "Engineering Manager, SubstackFounder, Lovable",
    image2: "/lovable.jpg",
  },
  {
    id: "substack",
    image1: "Substack",
    text: "Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.",
    name: "Dax Dasilva",
    role: " Founder and CEO, Lightspeed",
    image2: "/lovable.jpg",
  }
];

    const [hovered, setHovered] = useState(false);
  return (
    <div className='w-full xl:px-[5%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4 '>
            <div className='text-center flex flex-col items-center justify-center py-21'>
                <img className='mb-4' src={img1} alt="" />
                <h1 className='text-2xl text-center text-[#64748D] space-y-5 px-7 md:mx-24 xl:mx-30 mx-auto text-[17px] md:text-md'>"With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world."</h1>
                <p className='mt-6 mb-3 font-semibold'>Kurtis Moyer, <span className='text-[#64748D]'>Lead Product Manager of Payments Minbody</span>
                </p>

                 <div className=''>
                                            {/* Buttons */}
                                        <motion.button 
                                        onHoverStart={() => setHovered(1)}
                                        onHoverEnd={() => setHovered(null)}
                                        className=' w-full sm:w-auto flex gap-1  py-3 text-[#533AFD] font-semibold hover:text-[#4032C8] rounded'>Read the story
                                        <AnimatePresence mode='wait'>
                                            {hovered === 1 ? (
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


            {/* company logos */}
            {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
          {testimonials.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active === item.id
                  ? "bg-[#533AFD] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div> */}
        </div>
    </div>
  )
}

export default Kurtis