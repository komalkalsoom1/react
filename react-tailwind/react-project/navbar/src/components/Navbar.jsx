import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ];

  return (
    <header className='bg-black text-white hidden md:block'>
      <nav className='px-4 py-4 flex justify-between items-center'>
        <a href='/' className='text-xl font-bold text-white'>Blogger</a>
        
        <ul className='flex gap-12 text-lg'>
          {navItems.map(({ path, link }) => (
            <li key={path} className='text-white'>
              <NavLink to={path} className='hover:text-orange-500'>{link}</NavLink>
            </li>
          ))}
        </ul>
        
        <div className='flex gap-4 items-center'>
          <a href='/' className='hover:text-orange-500'><FaFacebookSquare /></a>
          <a href='/' className='hover:text-orange-500'><FaLinkedin /></a>
          <a href='/' className='hover:text-orange-500'><FaInstagramSquare /></a>
          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 duration-200 ease-in'>
            Log in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
