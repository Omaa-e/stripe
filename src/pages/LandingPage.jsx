import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
// import StripeLogo from '../assets/wave__1_.webp'


const LandingPage = () => {
  return (
    <div>
        <div className='relative h-screen overflow-hidden'>
           
                {/* <img src={StripeLogo} alt="" className='absolute h-full w-full object-cover' />

                <div className='absolute w-[700px] h-[700px] bg-gradient-to-br from pink-500 to-purple-600 rounded-[40%] blur-[100px] animate-[float_10s_ease-in-out_infinite]'></div> */}
            <Nav/>
            <Hero/>
            
        </div>
    </div>
  )
}

export default LandingPage