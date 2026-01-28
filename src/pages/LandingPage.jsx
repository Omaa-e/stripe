import React from 'react'
import Nav from '../components/Nav'
import StripeLogo from '../assets/stripe Image.png'

const LandingPage = () => {
  return (
    <div>
        <section className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10'>
                <img src={StripeLogo} alt="" className='w-full object-cover' />
            </div>
            <Nav/>
            
        </section>
    </div>
  )
}

export default LandingPage