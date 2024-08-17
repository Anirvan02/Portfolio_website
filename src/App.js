// src/App.js
import React from 'react';
import HeaderHero from './components/HeaderHero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'; // Create a CSS file for global styles

const App = () => (
  <div className="App">
    <HeaderHero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
);

export default App;
