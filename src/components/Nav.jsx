import React from 'react'
import stripe from '../assets/stripe_Logo_1.png'

const Nav = () => {
  return (
    <div>
        {/* large screens */}
        <div className=" p-4 ">
            <a href="/" className="">
            <img src={stripe} alt="stripe logo" className='w-25 hover:text-[#EDADD9]' />
            </a>
        </div>
    </div>
  )
}

export default Nav