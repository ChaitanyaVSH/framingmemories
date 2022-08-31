import React from 'react';
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBarWrapper}>
      <p>Framing Memories</p>
      <ul>
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar;
