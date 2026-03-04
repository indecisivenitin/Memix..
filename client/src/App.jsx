import React from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className='w-full h-screen bg-primary'>
          <Landing />
        </div> */}
        <Route path="/" element={<Landing />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
