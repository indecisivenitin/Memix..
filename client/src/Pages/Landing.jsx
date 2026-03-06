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
      <section id='about'>
        <About />
      </section>
      <About_2 />
      <section id='usecases'>
        <UseCases />
      </section>
      <Bottom />
      <section id='footer'>
        <Footer />
      </section>
    </div>
  )
}

export default Landing
