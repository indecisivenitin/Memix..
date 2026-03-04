import React from 'react'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className="bg-primary w-full h-full flex justify-center">
        <div className="bg-[url('../src/assets/background.png')]  bg-cover bg-bottom bg-no-repeat w-[92%] h-[95%] rounded-b-[4rem]" >
            <Navbar />
            <div className='w-full h-full flex flex-col mt-20 items-center'>
                <div className='heading1'>
                    <h1 className='text-6xl font-bold ml-6' >Meetings bloom into </h1>
                    <div className='flex gap-0 items-center justify-center relative'>
                        <h1 className='text-6xl font-bold mr-2' >clear, actionable notes</h1>
                        <img className='w-10 h-12' src="../src/assets/headingimg1.png" alt="" />
                        <img className='w-10 h-12 absolute -right-4 bottom-4' src="../src/assets/headingimg2.png" alt="" />
                    </div>
                    
                </div>
                <div className='mt-14 text-xl text-gray-600'>
                    <h1>Every conversation you lead becomes a garden of insights </h1> 
                    <h1 className='ml-9'>and summarized notes, so you can stay focused</h1>
                </div>
                <div className='relative mt-18 '>
                    <div className='bg-black h-18 w-92 '></div>
                    <div className='bg-accent h-18 w-92 absolute bottom-3 right-3 flex items-center gap-8 px-6 transition-transform duration-300 
                hover:translate-x-2'>
                        <button className='text-xl cursor-pointer hover:text-primary'>Start capturing meetings</button>
                        <div><img src="../src/assets/buttonarrow.png" alt="" /></div>
                    </div>
                </div>
                <div className="w-4/5 h-full bg-[url('../src/assets/dashboard.png')] bg-auto bg-bottom bg-no-repeat">
                    {/* <img src="../src/assets/dashboard.png" alt="" /> */}
                </div>
            </div>
        
        </div>
      
    </div>
  )
}

export default Home
