import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = ({ isVisible }) => {
  return (
    <header className={`header ${isVisible ? '' : 'hidden-navbar'}`}>
      <a href="/" className='logo'>
        <img src={Logo} alt="Logo" />
      </a>
      <nav className='navbar'>
        <a href="#about">Sobre mim</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="/">Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
