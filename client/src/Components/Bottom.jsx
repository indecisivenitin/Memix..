import { useNavigate } from "react-router-dom"

const Bottom = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-[90vh] bg-primary">
            <div className="bg-[url('../src/assets/bottom.png')] bg-cover bg-center bg-no-repeat w-full h-full z-0 flex flex-col justify-center items-center relative">
                <div className='flex flex-col justify-center items-center absolute bottom-50'>
                    <h1 className='text-5xl font-medium'>Time to fly through big ideas,</h1>
                    <h1 className='text-5xl font-medium ml-6'> while we handle the rest</h1>
                    <h2 className='text-lg text-gray-800 mt-4'>Let Memix handle the notes from today, </h2>
                    <h2 lassName='text-lg text-gray-800 '>so you can focus on your next big win.</h2>
                </div>
                <div className='absolute bottom-20'>
                    <div className='relative mt-18'>
                        <div className='bg-black h-18 w-92 '></div>
                        <div className='bg-accent h-18 w-92 absolute bottom-3 right-3 flex items-center gap-8 px-6 transition-transform duration-300 
                hover:translate-x-2 '>
                            <button
                            onClick={()=>navigate('/dashboard')}
                            className='text-xl cursor-pointer hover:text-primary '>Start capturing meetings</button>
                            <div><img src="../src/assets/buttonarrow.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom
