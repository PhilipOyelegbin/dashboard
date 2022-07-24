import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

const Dashboard = () => {
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    const user = sessionStorage.getItem('data');
    const savedData = JSON.parse(user);
    setUserinfo(savedData);
}, []);

  console.log(userinfo);
  return (
    <section className='h-screen flex justify-center items-center my-3 px-1 py-2'>
        <div className='w-11/12 bg-gradient-to-br from-[#00D2B5] to-[#01C4E0] p-3 rounded-md md:w-4/6'>
          <h2 className='font-bold text-2xl'>DASHBOARD</h2>
          <h3 className='text-xl'>USER PROFILE</h3>
          <hr className='border-black' />
          <img src={avatar} className='w-36 h-36 mx-auto mt-2 rounded-full' alt="" />
          <h2 className='text-2xl text-center'>{userinfo.username  || "No entry"}</h2>
          <p>Full Name: {userinfo.firstName || "not available"} {userinfo.lastName || "not available"}</p>
          <p>Email: {userinfo.email || "not available"}</p>
          <p>Phone Number: {userinfo.phoneNumber || "not available"}</p>
          <p>Course: {userinfo.course || "not available"}</p>
          <p>Gender: {userinfo.gender || "not available"}</p>
          <p>Birthday: {userinfo.birthday || "not available"}</p>
          <p>Occupation: {userinfo.occupation || "not available"}</p>
          <p>Marital Status: {userinfo.maritalStatus || "not available"}</p>
          <div className='mt-2'><Link to={'/login'} className='text-xl bg-white hover:bg-slate-200 px-4 py-2 rounded-md'>Log Out</Link></div>
        </div>
    </section>
  )
}

export default Dashboard