import React from 'react'
import LandingPage from './pages/LandingPage'
import Flexible from './components/Flexible'
import Background from './components/Background'
import Backbone from './components/Backbone'
import Power from './components/Power'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Herts from './components/Herts'
import Build from './components/Build'
import Saas from './components/Saas'
import Kurtis from './components/Kurtis'
import Reliable from './components/Reliable'
import Happening from './components/Happening'
import Book from './components/Book'

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
        <Herts/>
        <Build/>
        <Saas/>
        <Kurtis/>
        <Reliable/>
        <Happening/>
        <Book/>
      
      </div>
     
    </div>
  )
}

export default App