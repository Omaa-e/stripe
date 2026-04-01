import React from 'react'
import LandingPage from './pages/LandingPage'
import Flexible from './components/Flexible'
import Background from './components/Background'
import Backbone from './components/Backbone'
import Power from './components/Power'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='w-full sm:border sm:border-gray-200'>
      <div className=''>
        <Nav/>
         <LandingPage/>
      
      </div>
     
    </div>
  )
}

export default App