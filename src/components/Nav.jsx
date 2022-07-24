import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-200 text-black px-5 py-3">
        <h1 className="text-2xl font-mono font-black">Techathon</h1>
        <ul className=" flex gap-3">
            <li className="text-xl hover:line-through"><NavLink to='/'>Register</NavLink></li>
            <li className="text-xl hover:line-through"><NavLink to='/login'>Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav