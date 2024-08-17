import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/HeaderHero.css'; // Create a CSS file for styles

const HeaderHero = () => {
  useEffect(() => {
    const typed = new Typed('.input', {
      strings: ["Anirvan Pandey.", "A Graphic Designer.", "A Web Developer.", "A Blockchain Developer."],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.header .navbar');
    const menuButton = document.querySelector('#menu');
    const closeButton = document.querySelector('#close');
    
    const openMenu = () => {
      navbar.classList.add('active');
    };
    
    const closeMenu = () => {
      navbar.classList.remove('active');
    };

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    return () => {
      menuButton.removeEventListener('click', openMenu);
      closeButton.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo"><i className="fa-solid fa-a"></i></a>
        <nav class="navbar">
          <div id="close" class="fas fa-times"></div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <div id="menu" className="fas fa-bars"></div>
      </header>

      <section className="hero" id="home">
        <div className="main-width">
          <div className="container">
            <div className="image"><img src="images/home.png" alt="" /></div>
            <div className="hero-text">
              <h3>Hey there!</h3>
              <h1>I am,</h1>
              <h1><span className="input"></span></h1>
              <div className="social">
                <a href="https://github.com/Anirvan02"><i className="fa-brands fa-github"></i></a>
                <a href="https://x.com/PandeyAnirvan"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.hackerrank.com/profile/pandeyanirvan02"><i className="fa-brands fa-hackerrank"></i></a>
                <a href="https://www.linkedin.com/in/anirvan-pandey-6b2b9a219/"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="button">
                <a href="images/Anirvan's Resume.pdf" download>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderHero;
