import {NavLink} from 'react-router-dom';

const Nav = () => {
  const menuContent = [
    {id: 1, label: 'Register', link: '/'},
    {id: 2, label: 'Login', link: '/login'}
  ];

  return (
    <nav className="flex justify-between items-center bg-slate-200 text-black px-5 py-3">
      <h1 className="text-2xl font-mono font-black">Techathon</h1>
      <ul className="flex gap-3">
        {menuContent.map((contents) => (
          <li className="text-xl" key={contents.id}><NavLink className={({isActive}) => isActive ? 'line-through' : ''} to={contents.link}>{contents.label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav