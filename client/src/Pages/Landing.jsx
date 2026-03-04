import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import About_2 from '../Components/About_2'
import UseCases from '../Components/UseCases'
import Bottom from '../Components/Bottom'
import Footer from '../Components/Footer'

const Landing = () => {
  return (
    <div className='w-screen h-screen bg-primary'>
      <Home />
      <About />
      <About_2 />
      <UseCases />
      <Bottom />
      <Footer />
    </div>
  )
}

export default Landing
