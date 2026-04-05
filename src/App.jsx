import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <ParticleBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="tools"><Tools /></div>
        <div id="projects"><Projects /></div>
        <div id="certificates"><Certificates /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
