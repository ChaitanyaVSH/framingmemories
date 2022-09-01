import React from 'react';

// Icons
import { AiOutlineMenu } from "react-icons/ai";

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
      {/* Show the icon only on screens that go below 500px */}
      <AiOutlineMenu className={styles.menuIcon}/>
    </div>
  )
}

export default NavBar;
