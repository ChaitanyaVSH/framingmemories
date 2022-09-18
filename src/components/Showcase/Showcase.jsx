import React, { useEffect, useState } from 'react';
import styles from "./Showcase.module.css";

// Images
import lp1 from "../../assets/lp1.jpeg";
import lp2 from "../../assets/lp2.jpeg";
import lp3 from "../../assets/lp3.jpeg";
import lp4 from "../../assets/lp4.jpeg";
import lp5 from "../../assets/lp5.jpeg";
import lp6 from "../../assets/lp6.jpeg";
import lp7 from "../../assets/lp7.jpeg";
import lp8 from "../../assets/lp8.jpeg";
import lp9 from "../../assets/lp9.jpeg";


const Showcase = () => {

    const images = [lp1, lp2, lp3, lp4, lp5, lp6, lp7, lp8, lp9]
    let [imageIndex, setImageIndex] = useState(0);

    const _changeBackgroundImage = () => {
        imageIndex = (imageIndex + 1 ) % 10;
        setImageIndex(imageIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            _changeBackgroundImage()
        }, 5000)
    }, [])
    
    return (
        <div className={styles.showcase}>
            <div className={styles.overlay}></div>
            <img src={images[imageIndex]} alt="captured by mahesh" className={styles.image}/>
        </div>
    )
}

export default Showcase;
