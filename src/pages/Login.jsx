import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import login from '../assets/login.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userinfo, setUserinfo] = useState({});

    // a state for showing password
    const [show, setShow] = useState(false);

    useEffect(() => {
        const data = sessionStorage.getItem('data');
        const userinput = JSON.parse(data)
        setUserinfo(userinput);
    }, [])
    
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (userinfo?.username === username && userinfo?.email === email && userinfo?.password === password) {
            navigate('/dashboard');
        } else {
            setError('Login failed, please register!')
        }
    };

  return (
    <section className='md:h-screen flex justify-center items-center gap-3 p-5 mt-3'>
        <div className='md:w-11/12 md:h-96 flex flex-col md:flex-row'>
            <div className='md:h-full md:w-1/2'>
                <img src={login} className='w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none' alt="" />
            </div>
            <form onSubmit={handleLogin} className='bg-gradient-to-br from-[#01C4E0] to-[#00D2B5] md:h-full md:w-1/2 rounded-b-md md:rounded-l-none md:rounded-r-md p-1'>
                <h2 className='text-2xl text-indigo-600 text-center font-bold'>Log into dashboard</h2>
                <div className='form-control'>
                    <label htmlFor="">User Name</label>
                    <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='MoonShot' />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Email Address</label>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <div className='flex items-center border-b border-black rounded-md'>
                        <input className='border-none' type={show ? "text": "password"} name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******' />
                        <FaEye className={`w-6 h-6 cursor-pointer ${show ? "block" : "hidden"}`} onClick={() => setShow(prev => !prev)}/>
                        <FaEyeSlash className={`w-6 h-6 cursor-pointer ${show ? "hidden" : "block"}`} onClick={() => setShow(prev => !prev)}/>
                    </div>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex items-center gap-1'>
                        <input className='w-auto' type="checkbox" name="remember" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <label><Link to='/reset'>Forgot password</Link></label>
                </div>

                <p className='text-xl text-center text-red-900 font-bold mb-2'>{error}</p>
                    
                <button type='submit' className='btn bg-indigo-600 hover:bg-indigo-500'>Sign In</button>

                <p className='text-center text-sm mt-3'>Don't have an account? <Link className='text-indigo-500 font-bold' to='/'>Create one!</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Login