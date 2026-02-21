import {React,useState} from 'react'
import stripe from '../assets/Logo.svg'
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";


const Nav = () => {
  const [expanded, setExpanded] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setExpanded(!expanded);

  // Close menu after clicking any link
  const handleClose = () => setExpanded(false);
  return (
    <div className='w-full'>
        <div className='flex  justify-between items-center border-b border-gray-200'>
            <div className="flex xl:px-[9%]">
                <div className="flex ">
                {/* logo */}
                <a href="/" className="pt-7">
                    <img src={stripe} alt="stripe logo" className='w-19 hover:text-                     [#AEB3B8]' />
                </a>
                {/* Large screens */}
                
                    <div className='hidden lg:block my-5 text-center '>
                        <a href="" className='p-2 text-sm font-semibold text-[#203347]'>Products</a>
                        <a href="" className='p-2 text-sm font-semibold text-[#203347]'>Solutions</a>
                        <a href="" className='p-2 text-sm font-semibold text-[#203347]'>Developers</a>
                        <a href="" className='p-2 text-sm font-semibold text-[#203347]'>Resources</a>
                        <a href="" className='p-2 text-sm font-semibold text-[#203347]'>Pricing</a>
                    </div>
            </div>
            

                <div className='justify-end items-center space-x-20 hidden lg:flex'>
                    <div className='hidden lg:block m-4'>
                        <a href="">Sign in</a>
                        <a href="">Sign up</a>
                </div>
            </div>
            </div>
            

        {/* small Screens */}
        <div className=' lg:hidden justify-between h-16 px-9'>
            <div onClick={toggleMenu} className=" p-5">
            {expanded ? (
                <AiOutlineClose className="w-6 h-6 cursor-pointer bg-" />
            ) : (
                <VscMenu className="w-6 h-6 cursor-pointer " />
            )}
            </div>

            <div className={` ${expanded ? "absolute bg-[#ffffff] w-full pb-6" : "hidden"} flex flex-col  w-full`}>
                <a href="" className='p-4 text-center text-[#061B31]'>Products</a>
                <a href="" className='p-4 text-center text-[#061B31]'>Solutions</a>
                <a href="" className='p-4 text-center text-[#061B31]'>Developers</a>
                <a href="" className='p-4 text-center text-[#061B31]'>Resources</a>
                <a href="" className='p-4 text-center text-[#061B31]'>Pricing</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Nav