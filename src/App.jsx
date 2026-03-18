import React from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Meetingspage from './Pages/Meetingspage';
import Dashboardhomepage from './Pages/Dashboardhomepage';
import Settingspage from './Pages/Settingspage';
import Notespage from './Pages/Notespage';
import Teamspage from './Pages/Teamspage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className='w-full h-screen bg-primary'>
          <Landing />
        </div> */}
        <Route path="/" element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />}>

          <Route index element={<div className="p-8">Dashboard Home</div>} />

          <Route path="meetings" element={<Meetingspage />} />

         

        </Route> */}
        <Route path='/dashboard' element={<Dashboardhomepage />} />
        <Route path='/dashboard/meetings' element={<Meetingspage />} />
        <Route path='/dashboard/settings' element={<Settingspage />} />
        <Route path='/dashboard/notes' element={<Notespage />} />
        <Route path='/dashboard/teams' element={<Teamspage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
