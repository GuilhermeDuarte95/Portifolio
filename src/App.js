import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Hero from './components/hero/hero.js';
import About from './components/about/about.js'
import loadingGif from './assets/loading.gif'; // Importa o GIF
import SkillsSection from './components/skillsSection/skillsSection.js';
import Projects from './components/projectsSection/projectsSection.js';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    let lastScrollTop = 0;

    // Simula um carregamento de 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Função para esconder/exibir o navbar ao rolar a página
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setNavbarVisible(currentScroll < lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer); // Remove o timeout para evitar bugs
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Se estiver carregando, exibe o GIF
  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={loadingGif} alt="Carregando..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar isVisible={isNavbarVisible} />
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
    </div>
  );
}

export default App;
