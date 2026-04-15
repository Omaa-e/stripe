import React from 'react'
import LandingPage from './pages/LandingPage'
import Flexible from './components/Flexible'
import Background from './components/Background'
import Backbone from './components/Backbone'
import Power from './components/Power'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stack from './components/Stack'

const App = () => {
  return (
    <div className=''>
      <div className=''>
        <Nav/>
        <Hero/>
        <Stack/>
        <Flexible/>
        <Background/>
        <Backbone/>
        <Power/>
        
         <LandingPage/>
      
      </div>
     
    </div>
  )
}

export default App