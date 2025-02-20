import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Hero from './components/hero/hero.js';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true); // Estado para controlar a visibilidade

  useEffect(() => {
    let lastScrollTop = 0;

    // Função para controlar o comportamento da rolagem
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop) { // Se o usuário rolou para baixo
        setNavbarVisible(false); // Esconde o navbar
      } else { // Se o usuário rolou para cima
        setNavbarVisible(true); // Exibe o navbar
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previne valores negativos
    };

    // Adicionar o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remover o evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O efeito roda apenas uma vez, no carregamento do componente

  return (
    <div className="App">
      <Navbar isVisible={isNavbarVisible} />
      <Hero />
    </div>
  );
}

export default App;
