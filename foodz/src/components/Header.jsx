import React from 'react';
import "./header.css";
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import search from '../assets/search.png';
import bag from '../assets/bag.png';




function Header() {
  
  return (
    <>
      <header>
        <div className="wrapper">
        <div className="logo-img">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-links">
            <ul>
                <li>
                  <a href="#">
                    <img src={home} alt="Home" />
                    home
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={search} alt="search" />
                  <p>search</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={bag} alt="cart" />
                    <p>Cart</p>
                  </a>
                </li>
            </ul>
        </div>

        <div className="location">
          <p>Tirur, Malappuram</p>
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;
