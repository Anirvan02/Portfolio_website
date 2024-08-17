import React from 'react';
import '../styles/Portfolio.css'; // Create a CSS file for styles

const Portfolio = () => (
  <div id="portfolio">
    <div className="projects">
      <h1>My Works</h1>
      <div className="work-list">
        <Work
          image="images/pygame2.png"
          title="SpaceShooter 2D"
          description="A beginner and user-friendly multiplayer game. It challenges players
              to shoot bullets at their opponents until their health depletes. The
              last player standing wins the match, providing an exciting and
              competitive experience"
          link="https://github.com/Anirvan02/SpaceShooter_2D"
        />
        <Work
          image="images/burger.png"
          title="BurgerBite"
          description="A delicious burger restaurant landing page with an user-friendly
              user interface that offers a delightful browsing experience. The
              website includes essential pages such as About, Burger menu
              catalogue, and Contact us sections"
          link="https://github.com/Anirvan02/BurgerBite_website"
        />
        <Work
          image="images/shopping.png"
          title="ShopEasy"
          description="An e-commerce platform specializing in clothing and accessories for
              both men and women. ShopEasy offers an user-friendly shopping
              user interface with integrated features including pages such as
              User login, Product catalogue, Shopping cart, Billing and Checkout
              sections"
          link="https://github.com/Anirvan02/ShopEasy"
        />
      </div>
    </div>
  </div>
);

const Work = ({ image, title, description, link }) => (
  <div className="work">
    <img src={image} alt={title} />
    <div className="layer">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}><i className="fa-brands fa-github"></i></a>
    </div>
  </div>
);

export default Portfolio;
