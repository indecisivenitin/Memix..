import React from 'react'
import Dashboard from './Dashboard'

const Notespage = () => {
  return (
    <div className='flex'>
      <Dashboard />
      <section className="flex  justify-center  pt-20 w-full h-screen bg-aboutHeading/20">
          <div >
                <input className="py-2 px-4  border border-accent/50 outline-accent rounded-sm shadow-xl" type="text" placeholder='Create notes, tags, people...' />
          </div>
      </section>
    </div>
  )
}

export default Notespage
