import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import register from '../assets/register.jpg';

const Register = () => {
    const userData = {
        profile: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        course: '',
        maritalStatus: '',
        gender: '',
        birthday: '',
        occupation: '',
        password: '',
        cPassword: '',
        terms: false
    };

    const [user, setUser] = useState(userData);

    // a state for showing password
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (user.username === "" || user.username.includes(" ")) {
            setError('User name cannot be empty and should not include space')
        } else if (user.firstName === "" || user.firstName.includes(" ")) {
            setError('First name cannot be empty and should not include space')
        } else if (user.lastName === "" || user.lastName.includes(" ")) {
            setError('Last name cannot be empty and should not include space')
        } else if (user.email === "" || !user.email.includes("@")) {
            setError('Email cannot be empty and should include @')
        } else if (user.gender === "") {
            setError('Gender cannot be empty')
        } else if (user.birthday === "") {
            setError('Birthday cannot be empty')
        } else if (user.occupation === "" || user.occupation.includes("  ")) {
            setError('Occupation cannot be empty and should not include double space')
        } else if (user.phoneNumber === "" || user.phoneNumber.includes(" ")) {
            setError('Phone number cannot be empty and should not include space')
        } else if (user.maritalStatus === "") {
            setError('Marital status cannot be empty')
        } else if (user.course === "") {
            setError('Course cannot be empty')
        } else if (user.password === "" || user.password.length < 6) {
            setError('Password cannot be empty and must be at least 6 characters')
        } else if (user.cPassword !== user.password) {
            setError('Password does not match')
        } else if (user.terms === false) {
            setError('Accept terms and conditions before you continue')
        } else {
            const data = JSON.stringify(user);
            sessionStorage.getItem('data') === null && sessionStorage.setItem('data', data);
            navigate('/login');
        }
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setUser({...user, [name]: type === 'checkbox' ? checked : value})
    }

  return (
    <section className='md:h-screen flex flex-col justify-center items-center md:flex-row gap-3 px-2 mt-3'>
        <div className='md:h-[700px] flex flex-col md:flex-row p-2'>
            <div className='h-full md:w-1/2'>
                <img src={register} className='w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none' alt="" />
            </div>
            <form onSubmit={handleRegister} className='h-full md:w-1/2 bg-gradient-to-br from-[#01C4E0] to-[#00D2B5] rounded-b-md md:rounded-l-none md:rounded-r-md p-1'>
                <h2 className='text-2xl text-slate-600 text-center font-bold'>Create account</h2>
                <div className='form-control'>
                    <label htmlFor="profile">Upload image</label>
                    <input type="text" name={'profile'} value={user.profile} onChange={handleChange} placeholder='Paste image url from file manager' />
                </div>
                <div className='form-control'>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name={'username'} value={user.username} onChange={handleChange} placeholder='MoonShot' />
                </div>
                <div className='form-control'>
                    <label htmlFor="firstName">Full Name</label>
                    <div className='flex gap-1'>
                        <input type="text" name={'firstName'} value={user.firstName} onChange={handleChange} placeholder='First Name' />
                        <input type="text" name={'lastName'} value={user.lastName} onChange={handleChange} placeholder='Last Name' />
                    </div>
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name={'email'} value={user.email} onChange={handleChange} placeholder='example@gmail.com' />
                </div>
                <div className='flex gap-1'>
                    <div className='form-control w-1/2'>
                        <label htmlFor="gender">Gender</label>
                        <select name={'gender'} value={user.gender} onChange={handleChange}>
                            <option value="">Choose your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='form-control w-1/2'>
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" name={'birthday'} value={user.birthday} onChange={handleChange} placeholder='Enter first name' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-1'>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="occupation">Occupation</label>
                        <input type="text" name={'occupation'} value={user.occupation} onChange={handleChange} placeholder='frontend developer' />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" name={'phoneNumber'} value={user.phoneNumber} onChange={handleChange} placeholder='+234xxxxxxxxxx' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-1'>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="maritalStatus">Marital Status</label>
                        <select name={'maritalStatus'} value={user.maritalStatus} onChange={handleChange}>
                            <option value="">Select your status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="course">Course</label>
                        <select name={'course'} value={user.course} onChange={handleChange}>
                            <option value="">Choose a course</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Frontend(React)">Frontend(React)</option>
                            <option value="Backend(Node)">Backend(Node)</option>
                            <option value="Backend(Django)">Backend(Django)</option>
                            <option value="Product design">Product design</option>
                            <option value="Mobile developer">Mobile developer</option>
                            <option value="Copy writing">Copy writing</option>
                            <option value="Content writer">Content writer</option>
                            <option value="Digital marketing">Digital Marheting</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-1'>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="password">Password</label>
                        <div className='flex items-center border-b border-black rounded-md'>
                            <input className='border-none' type={show ? "text": "password"} name={'password'} value={user.password} onChange={handleChange} placeholder='******' />
                            <FaEye className={`w-6 h-6 cursor-pointer ${show ? "block" : "hidden"}`} onClick={() => setShow(prev => !prev)}/>
                            <FaEyeSlash className={`w-6 h-6 cursor-pointer ${show ? "hidden" : "block"}`} onClick={() => setShow(prev => !prev)}/>
                        </div>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label htmlFor="cPassword">Confirm Password</label>
                        <div className='flex items-center border-b border-black rounded-md'>
                            <input className='border-none' type={show ? "text": "password"} name={'cPassword'} value={user.cPassword} onChange={handleChange} placeholder='******' />
                            <FaEye className={`w-6 h-6 cursor-pointer ${show ? "block" : "hidden"}`} onClick={() => setShow(prev => !prev)}/>
                            <FaEyeSlash className={`w-6 h-6 cursor-pointer ${show ? "hidden" : "block"}`} onClick={() => setShow(prev => !prev)}/>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1 my-3'>
                    <input className='w-auto' type="checkbox" name={'terms'} checked={user.terms} onChange={handleChange} />
                    <label htmlFor="terms">Accept terms and conditions</label>
                </div>

                <p className='text-base text-center text-red-900 font-bold mb-2'>{error}</p>

                <button type='submit' className='btn bg-slate-600 hover:bg-slate-500'>Sign Up</button>
                
                <p className='text-center text-sm my-3'>All ready have an account? <Link className='text-slate-500 font-bold' to='/login'>Sign in</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Register