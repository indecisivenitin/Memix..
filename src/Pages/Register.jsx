import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const handleRegister = async () => {

        const userData = {
            name,
            email,
            password
        }

        try {

            const res = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();

            // console.log(data);

            if(res.ok){
                alert("Registration Successfull")
                navigate('/login',{replace:true})
            }
            else{
                alert(data.message)
            }

            

        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className='w-full h-screen bg-primary flex justify-center items-center'>
            <div className='w-4/5 h-4/5  flex flex-col items-center pt-20'>
                <div className='main rounded-3xl w-2/5 min-h-3/5 flex flex-col items-center relative  bg-white/50 backdrop-blur-3xl '>
                    <img className='absolute z-0 -right-20 -top-20' src="../src/assets/bird2.png" alt="" />
                    <img className='absolute z-0 -left-20 -top-10' src="../src/assets/flower1.png" alt="" />
                    <img className='absolute z-0 -left-10 -bottom-10' src="../src/assets/image3.png" alt="" />
                    <img className='absolute z-0 top-20 left-30' src="../src/assets/butterfly.png" alt="" />
                    <div className='my-3 flex flex-col items-center gap-1 border-b py-5 border-gray-500 w-4/5'>
                        <div className='flex justify-center items-center gap-2' >
                            <div className='bg-black p-2 w-fit'>
                                <img src="../src/assets/logosvg.png" alt="" />
                            </div>
                            <h1 className='text-3xl font-semibold'>Memix</h1>
                        </div>
                        <h1 className='text-4xl font-semibold text-[#768CC4]'>Register Here</h1>
                        <h2 className='text-[14px] text-[#FA8353] font-medium'>register to continue</h2>
                    </div>
                    <div className='my-3 flex flex-col  items-center   py-5'>
                        <form className='flex flex-col gap-3' action="" onSubmit={(e) => e.preventDefault()}>
                            <p className='text-gray-700'>Name</p>
                            <input className='p-3 border-gray-400 border rounded-2xl focus:ring-accent focus:ring-1 w-96 outline-none' type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' />
                            <p className='text-gray-700'>Your Email Address</p>
                            <input className='p-3 border-gray-400 border rounded-2xl focus:ring-accent focus:ring-1 w-96 outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' />
                            <p className='text-gray-700'>Password</p>
                            <input className='p-3 border-gray-400 border rounded-2xl focus:ring-accent focus:ring-1 w-96 outline-none' type="password"
                                value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*********' />
                            <button
                                className='p-3 mt-2 bg-[#FFC46C] border-none text-lg font-medium cursor-pointer hover:bg-[#FA8353] rounded-2xl  w-96 '
                                onClick={handleRegister}
                            >Register</button>
                        </form>
                        <div className='flex gap-2 justify-center items-center mt-2'>
                            <p className='text-gray-700'>Already have a account?</p>
                            <a href="/login"><p className='underline text-[#768CC4]'>Login</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
