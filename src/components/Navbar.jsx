import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../assets/icons/cropped_logo_sa.png'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to={'/'} className={'w-10 h-10 rounded-lg bg-white items-center justify-center font-bold shadow-md'}>
        <img className='w-20 h-10'
        src={icon}/>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to={'/about'} className={({isActive }) => isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
        <NavLink to={'/projects'} className={({isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>


      </nav>

    </header>
  )
}

export default Navbar