import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[80vh] bg-primary flex flex-col  items-center pt-70  '>
      <div className=' text-6xl py-1 font-semibold'>
        <h1>Meetings are moving fast while you’re </h1>
      </div>
      <div className='flex items-center gap-4 text-6xl py-1.75 font-semibold'>
        <h1>listening and still trying to  remember </h1>
        <img src="../src/assets/brain.png" alt="" />
      </div>
      <div className='flex items-center gap-4 text-6xl py-1.75 font-semibold'>
        <span>While other AI notes feel cold,</span>
        <span className='text-aboutHeading' > Memix listens</span>
      </div>
      <div className='flex items-center gap-4 text-6xl py-1.75 font-semibold'>
        <h1 className='text-aboutHeading'>like a human, thinks like a teammate,</h1>
        <img src="../src/assets/handshake.png" alt="" />
      </div>
      <div className='flex items-center gap-4 text-6xl py-1.75 font-semibold'>
        <h1 className='text-aboutHeading'> and captures</h1>
        <img src="../src/assets/record-fill.png" alt="" />
        <h1 className='text-aboutHeading'> what matters.</h1>
      </div>
    </div>
  )
}

export default About
