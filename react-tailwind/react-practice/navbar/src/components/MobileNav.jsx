import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ];

  return (
    <header className='bg-black text-white p-4 md:hidden'>
      <nav className='flex justify-between items-center'>
        <a href='/' className='text-xl font-bold text-white'>Blogger</a>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className='flex flex-col items-center mt-4 space-y-4'>
          <ul className='flex flex-col gap-4 text-lg'>
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink to={path} onClick={() => setMenuOpen(false)} className='text-white hover:text-orange-500'>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='flex gap-4 text-xl'>
            <a href='/' className='hover:text-orange-500'><FaFacebookSquare /></a>
            <a href='/' className='hover:text-orange-500'><FaLinkedin /></a>
            <a href='/' className='hover:text-orange-500'><FaInstagramSquare /></a>
          </div>
          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 duration-200 ease-in'>
            Log in
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileNav;
