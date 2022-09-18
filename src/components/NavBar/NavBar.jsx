import React, { useState } from 'react';
import logo from "../../assets/logo.jpg"

// Icons
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./NavBar.module.css";

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const _showMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.image}/>
        <ul className={showMenu ? styles.show : ""}>
          <li>Gallery</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        {/* Show the icon only on screens that go below 500px */}
        <AiOutlineMenu className={styles.menuIcon} onClick={_showMenu}/>
      </div>
    </div>
  )
}

export default NavBar;
