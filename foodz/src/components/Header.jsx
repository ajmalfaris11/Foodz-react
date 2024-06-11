import React from 'react';
import styles from './Header.module.css'; // Import the CSS module
import { bag, home, logo, map, search, user } from '../assets';




function Header() {
  
  return (
    <>
      <header>
        <div className={styles.wrapper}>
        <div className={styles.logoImg}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.menuLinks}>
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
                <li>
                  <a href="#">
                  <img src={user} alt="cart" />
                    <p>Account</p>
                  </a>
                </li>
            </ul>
        </div>

          <div className={styles.location}>
            <a href="#"> <img src={map} alt="Location"className={styles.menuIcon} /> <p>Tirur, Malappuram</p></a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
