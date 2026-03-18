import React from 'react'

const UseCases = () => {
  return (
    <div className="h-[80vh] w-full   flex flex-col justify-center items-center ">
      <div className='bg-primary w-full h-1/2 flex flex-col justify-center items-center' >
        <h1 className='text-6xl font-medium'>Where Our Notes </h1>
        <h1 className='text-6xl font-medium mb-10'>Bloom Best</h1>
        <h1 className='text-lg text-gray-800'>From pitch decks to product syncs, </h1>
        <h1 className='text-lg text-gray-800'>clarity always finds a place.</h1>
      </div>
      <div className="bg-primary w-full h-1/2 bg-[url('../src/assets/scene1.png')] bg-cover bg-center  bg-no-repeat flex justify-center items-center gap-80">
        <div>
            <h1 className='text-4xl font-medium '>Team Meetings & 1:1s</h1>
            <p className='text-lg text-gray-800 mt-8'>Capture ideas, decisions, and <br /> next steps — without slowing <br /> down the room.</p>
        </div>

        <div>
            <h1 className='text-4xl font-medium '>Client Calls</h1>
            <p className='text-lg text-gray-800 mt-8'>Stay focused on connection. <br /> We’ll take care of the <br /> documentation.</p>
        </div>

        <div>
            <h1 className='text-4xl font-medium '>Sales & Demos</h1>
            <p className='text-lg text-gray-800 mt-8'>Let your prospects talk. We’ll <br /> record needs, objections, and <br /> moments of magic.</p>
        </div>
      </div>
    </div>
  )
}

export default UseCases
