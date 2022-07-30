import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import register from '../assets/register.jpg';
import { FormInput, FormSelect } from '../components/FormEntry';

const Register = () => {
    const [userdata, setUserdata] = useState({
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
    });

    // a state for showing password
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
      document.title = 'Techathon - Registration'
    }, [])
    

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (userdata.username === "" || userdata.username.includes(" ")) {
            setError('User name cannot be empty and should not include space')
        } else if (userdata.firstName === "" || userdata.firstName.includes(" ")) {
            setError('First name cannot be empty and should not include space')
        } else if (userdata.lastName === "" || userdata.lastName.includes(" ")) {
            setError('Last name cannot be empty and should not include space')
        } else if (userdata.email === "" || !userdata.email.includes("@")) {
            setError('Email cannot be empty and should include @')
        } else if (userdata.gender === "") {
            setError('Gender cannot be empty')
        } else if (userdata.birthday === "") {
            setError('Birthday cannot be empty')
        } else if (userdata.occupation === "" || userdata.occupation.includes("  ")) {
            setError('Occupation cannot be empty and should not include double space')
        } else if (userdata.phoneNumber === "" || userdata.phoneNumber.includes(" ")) {
            setError('Phone number cannot be empty and should not include space')
        } else if (userdata.maritalStatus === "") {
            setError('Marital status cannot be empty')
        } else if (userdata.course === "") {
            setError('Course cannot be empty')
        } else if (userdata.password === "" || userdata.password.length < 6) {
            setError('Password cannot be empty and must be at least 6 characters')
        } else if (userdata.cPassword !== userdata.password) {
            setError('Password does not match')
        } else if (userdata.terms === false) {
            setError('Accept terms and conditions before you continue')
        } else {
            const data = JSON.stringify(userdata);
            sessionStorage.getItem('data') === null ? sessionStorage.setItem('data', data) : (sessionStorage.removeItem('data'), sessionStorage.setItem('data', data));
            navigate('/login');
        }
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setUserdata({...userdata, [name]: type === 'checkbox' ? checked : value})
    }

  return (
    <section className='md:h-screen flex flex-col justify-center items-center md:flex-row gap-3 px-2 mt-3'>
        <div className='md:h-[700px] flex flex-col md:flex-row p-2'>
            <div className='h-full md:w-1/2'>
                <img src={register} className='w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none' alt="" />
            </div>
            <form onSubmit={handleRegister} className='h-full md:w-1/2 bg-gradient-to-br from-[#01C4E0] to-[#00D2B5] rounded-b-md md:rounded-l-none md:rounded-r-md p-2'>
                <h2 className='text-2xl text-slate-600 text-center font-bold'>Create account</h2>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <FormInput label="Username" type="text" name="username" value={userdata.username} onchange={handleChange} placeholder="Enter username" />
                    <FormInput label="Email address" type="email" name="email" value={userdata.email} onchange={handleChange} placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <FormInput label="First name" type="text" name="firstName" value={userdata.firstName} onchange={handleChange} placeholder="Enter first name" />
                    <FormInput label="Last name" type="text" name="lastName" value={userdata.lastName} onchange={handleChange} placeholder="Enter last name" />
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <FormSelect label="Gender" name="gender" value={userdata.gender} onchange={handleChange}>
                        <option value="">Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </FormSelect>
                    <FormInput label="Birthday" type="date" name="birthday" value={userdata.birthday} onchange={handleChange} />
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <FormInput label="Occupation" type="text" name="occupation" value={userdata.occupation} onchange={handleChange} placeholder="frontend developer" />
                    <FormInput label="Phone number" type="tel" name="phoneNumber" value={userdata.phoneNumber} onchange={handleChange} placeholder="+234xxxxxxxxxx" />
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <FormSelect label="Marital status" name="maritalStatus" value={userdata.maritalStatus} onchange={handleChange}>
                        <option value="">Select your status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                    </FormSelect>
                    <FormSelect label="Course" name="course" value={userdata.course} onchange={handleChange}>
                        <option value="">Choose a course</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Frontend(React)">Frontend(React)</option>
                        <option value="Backend(Node)">Backend(Node)</option>
                        <option value="Backend(Django)">Backend(Django)</option>
                        <option value="Product design">Product design</option>
                        <option value="Mobile developer">Mobile developer</option>
                        <option value="Copy writing">Copy writing</option>
                        <option value="Content writer">Content writer</option>
                        <option value="Digital marketing">Digital marketing</option>
                    </FormSelect>
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row my-1">
                    <div className='w-full flex items-end border-b border-black'>
                        <FormInput label="Password" classname="border-none -mb-2" type={show ? "text": "password"} name="password" value={userdata.password} onchange={handleChange} placeholder="xxxxxx" />
                        <FaEye className={`w-6 h-6 cursor-pointer ${show ? "block" : "hidden"}`} onClick={() => setShow(prev => !prev)}/>
                        <FaEyeSlash className={`w-6 h-6 cursor-pointer ${show ? "hidden" : "block"}`} onClick={() => setShow(prev => !prev)}/>
                    </div>
                    <div className='w-full flex items-end border-b border-black'>
                        <FormInput label="Confirm password" classname="border-none -mb-2" type={show ? "text": "password"} name="cPassword" value={userdata.cPassword} onchange={handleChange} placeholder="xxxxxx"/>
                        <FaEye className={`w-6 h-6 cursor-pointer ${show ? "block" : "hidden"}`} onClick={() => setShow(prev => !prev)}/>
                        <FaEyeSlash className={`w-6 h-6 cursor-pointer ${show ? "hidden" : "block"}`} onClick={() => setShow(prev => !prev)}/>
                    </div>
                </div>
                <div className='flex items-center gap-1 my-3'>
                    <input className='w-auto' type="checkbox" name={'terms'} checked={userdata.terms} onChange={handleChange} />
                    <label htmlFor="terms">Accept terms and conditions</label>
                </div>
                <p className='text-base text-center text-red-900 font-bold mb-2'>{error}</p>

                <button type='submit' className='btn bg-slate-600 hover:bg-slate-500'>Sign Up</button>

                <p className='text-center text-sm my-3'>Already have an account? <Link className='text-slate-500 font-bold' to='/login'>Sign in</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Register
