import React from 'react'

const About_2 = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden  flex flex-col  items-center " > 
    {/* bg-[#f4e0f4] bg-[url('../src/assets/noise.png')] bg-cover bg-no-repeat */}
      {/* scene 1 */}
      <div className="bg-[url('../src/assets/scene1.png')] w-full bg-cover bg-center h-90 relative">
        <div className='flex flex-col items-center gap-1 pt-16 z-10'>
            <div>
                <h1 className='text-4xl font-semibold' >What happens once you</h1>
            </div>
            <div>
                <h1 className='text-4xl font-semibold' >start a meeting?</h1>
            </div>
            <div>
                <h1 className='text-lg font-light text-gray-800 mt-2' >We listen, structure, and sort everything in your meeting, </h1>
            </div>
            <div>
                <h1 className='text-lg font-light text-gray-800 ' >before your next coffee refill.</h1>
            </div>
        </div>
        <img className='absolute right-13 top-20 z-0' src="../src/assets/bird.png" alt="" />
      </div>
      <div className="z-10 bg-[linear-gradient(135deg,#d0e4f3,#f4fafd,#f4dcea,#b2adaa)]  w-full bg-cover bg-center h-250 relative -py-40">

            {/* props */}
            <img className='z-0 -top-18 left-10 absolute' src="../src/assets/cloudleft.png" alt="" />
            <img className='z-0 absolute top-8 right-120' src="../src/assets/cloudright.png" alt="" />
            <img className='z-0 absolute -top-16 right-10' src="../src/assets/cloudright.png" alt="" />
            <img className='z-0 absolute bottom-2 left-20' src="../src/assets/treeleft.png" alt="" />
            <img className='z-0 absolute bottom-2 right-10' src="../src/assets/treeright.png" alt="" />

            {/* elements */}

            <div className='flex flex-col gap-20 items-center w-full h-full'>
                <div className='flex justify-center items-center'>


                    <div className='absolute z-10 left-90 top-20 flex flex-col items-center justify-center  '>
                        <img className='w-66' src="../src/assets/image1.png" alt="" />
                        <span className='text-4xl font-medium' > Live Understanding,</span>
                        <span className='text-4xl font-medium' >Not Just Transcription</span>
                        <span className='text-gray-800 text-lg' >Our AI listens intelligently, not passively,</span>
                        <span className='text-gray-800 text-lg' >better than even a human assistant</span>
                    </div>
                    <div className='absolute z-10 right-90 top-20 flex flex-col items-center justify-cente'>
                        <img className='w-66' src="../src/assets/image2.png" alt="" />
                        <span className='text-4xl font-medium' >Clean, </span>
                        <span className='text-4xl font-medium' >Beautiful Notes</span>
                        <span className='text-gray-800 text-lg' >Get smart, structured, and human-</span>
                        <span className='text-gray-800 text-lg' >readable notes delivered instantly</span>
                    </div>
                </div>



                <div className='flex justify-center items-center'>


                    <div className='absolute z-10 left-90 bottom-20 flex flex-col items-center justify-center '>
                        <img className='w-66' src="../src/assets/image3.png" alt="" />
                        <span className='text-4xl font-medium' >Action Items, </span>
                        <span className='text-4xl font-medium' >Sorted Automatically</span>
                        <span className='text-gray-800 text-lg' >Who said what? Who’s doing what?</span>
                        <span className='text-gray-800 text-lg' >We’ll mark it, assign it, and organize it</span>
                    </div>
                    <div className='absolute z-10 right-90 bottom-20 flex flex-col items-center justify-center'>
                        <img className='w-66' src="../src/assets/image4.png" alt="" />
                        <span className='text-4xl font-medium' >Instant Sharing </span>
                        <span className='text-4xl font-medium' >and Syncing</span>
                        <span className='text-gray-800 text-lg' >Send notes to your team, Notion, Slack,</span>
                        <span className='text-gray-800 text-lg' >or inbox with a click its worthy of sharing</span>
                    </div>
                </div>
            </div>
      </div>

    </div>
  )
}

export default About_2
