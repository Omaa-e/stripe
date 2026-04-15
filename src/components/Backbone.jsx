import React from 'react'
import backImg from '../assets/backGlobe.png'

const Backbone = () => {
  return (
    <div className='bg-gradient-to-b from-[#141E4B] via-[#242171] to-[#5A53D0] '>
        <div className='xl:px-[9%] sm:px-4 sm:border-x sm:border-gray-200'>
            <div>
              <h1 className='mx-auto text-center text-4xl text-white py-16 '>The backbone of global commerce</h1>
            </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 text-white mb-4'>
            <div className='text-center sm:mb-4'>
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
                <p className='text-4xl font-medium'>200M+</p>
                <span>active subscriptions managed on Stripe Billing</span>
            </div>
        </div>

        <img src={backImg} alt="" />
        </div>
       
    </div>
  )
}

export default Backbone