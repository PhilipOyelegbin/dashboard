import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/login.jpg';
import { FormInput } from '../components/FormEntry';

const Login = () => {
    // a state for showing error
    const [error, setError] = useState('');
    const [userinfo, setUserinfo] = useState({});
    const [values, setValues] = useState({username: '', email: '', password: ''});

    const formAttributes = [
        {id: 2, label: "Username", name: "username", type: "text", placeholder: "Enter username", error: "Username not valid"},
        {id: 3, label: "Email", name: "email", type: "email", placeholder: "example@gmail.com", error: "Email not valid"},
        {id: 4, label: "Password", name: "password", type: "password", placeholder: "xxxxxx", error: "Password not valid"}
    ];

    useEffect(() => {
        const data = sessionStorage.getItem('data');
        const userinput = JSON.parse(data)
        setUserinfo(userinput);
        document.title = 'Techathon - Login';
    }, [])
    
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (userinfo?.username !== values.username && userinfo?.email !== values.email && userinfo?.password !== values.password) {
            setError('Data does not match, Please register!')
        } else if (userinfo?.username !== values.username) {
            setError('Username not valid')
        } else if (userinfo?.email !== values.email) {
            setError('Email not valid')
        } else if (userinfo?.password !== values.password) {
            setError('Password not valid')
        } else {
            navigate('/dashboard');
        }
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value});
    }

  return (
    <section className='md:h-screen flex justify-center items-center gap-3 p-5 mt-3'>
        <div className='md:w-11/12 md:h-96 flex flex-col md:flex-row'>
            <div className='md:h-full md:w-1/2'>
                <img src={login} className='w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none' alt="" />
            </div>
            <form onSubmit={handleLogin} className='bg-gradient-to-br from-[#01C4E0] to-[#00D2B5] md:h-full md:w-1/2 rounded-b-md md:rounded-l-none md:rounded-r-md p-2'>
                <h2 className='text-2xl text-indigo-600 text-center font-bold'>Log into dashboard</h2>
                {formAttributes?.map(obj => (
                    <FormInput key={obj.id} {...obj} value={values[obj.name]} onchange={handleChange}/>
                ))}
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