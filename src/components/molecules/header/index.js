// import React from 'react';

import { Link } from "react-router-dom";
import styles from './header.module.scss'

const HeaderComponent = () => {
  return (
    <header className={styles.headerWrapper}> 
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Our Articles</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;