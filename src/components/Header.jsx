import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/components/Header.css';

const Header = ({ children }) => {
  return (
    <>
      <nav className='nav'>
        <NavLink to='/' className='nav__item'>
          Usuarios
        </NavLink>
        <NavLink to='/' className='nav__item'>
          Tareas
        </NavLink>
      </nav>
      {children}
    </>
  );
};

export default Header;
