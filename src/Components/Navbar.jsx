import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-nav h-16 w-4/5 mt-10 ml-43'>
      <div className='navbar border border-gray-400 h-full w-full bg-primary/70 flex justify-between'>
        <div className='bg-black w-12 h-12 my-2 mx-4 flex items-center justify-center'><img className='w-3/5' src="../src/assets/logosvg.png" alt="" /></div>
        <div className='text-secondary flex gap-12 items-center'>
          <a href="#about"><p className='hover:text-purple-600 transition text-xl cursor-pointer'>Features</p></a>
          <a href="#footer"><p className='hover:text-purple-600 transition text-xl cursor-pointer'>Contact</p></a>
          <p onClick={()=> navigate('/login')} className='hover:text-purple-600 transition text-xl cursor-pointer'>Login</p>
          <a href="#usecases"><p className='hover:text-purple-600 transition text-xl cursor-pointer'>Use cases</p></a>
        </div>
        <div className='w-28 my-2 mx-4 '>
          <button onClick={()=>navigate('/register')} className='bg-accent w-30  h-12 hover:scale-102 hover:text-primary hover:font-semibold cursor-pointer'>Start for free</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
