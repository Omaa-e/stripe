import React from 'react'
import backImg from '../assets/backGlobe.png'

const Backbone = () => {
  return (
    <div className='sm:bg-gradient-to-b sm:from-[#141E4B] sm:via-[#242171] sm:to-[#5A53D0]'>
        <div>
            <h1 className='mx-auto text-center text-5xl sm:text-white py-16 '>The backbone of global commerce</h1>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 sm:text-white'>
            <div className='text-center'>
                <p className='text-4xl font-medium '>135+</p>
                <span>currencies and payment methods supported</span>
            </div>

            <div className='text-center'>
                <p className='text-4xl font-medium '>$1.4T</p>
                <span>in payment volume processed in 2024</span>
            </div>

            <div className='text-center'>
                <p className='text-4xl font-medium '>99.999%</p>
                <span>historical uptime for Stripe services</span>
            </div>

            <div className='text-center'>
                <p>200M+</p>
                <span>active subscriptions managed on Stripe Billing</span>
            </div>
        </div>

        <img src={backImg} alt="" />
    </div>
  )
}

export default Backbone