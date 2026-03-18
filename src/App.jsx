import React from 'react'
import LandingPage from './pages/LandingPage'
import Flexible from './components/Flexible'
import Background from './components/Background'
import Backbone from './components/Backbone'

const App = () => {
  return (
    <div className='w-full'>
      <LandingPage/>
      <Flexible/>
      <Background/>
      <Backbone/>
    </div>
  )
}

export default App