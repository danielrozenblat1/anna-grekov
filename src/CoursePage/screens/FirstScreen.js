import React, { useState, useEffect } from 'react';

import lips from "../../Icons/wired-lineal-1597-lips-hover-pinch.json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../../components/button/Button';
import learn from "../../Icons/wired-lineal-406-study-graduation-hover-pinch (1).json"
import middleImage from "../../images/אנה גרקוב תמונה ראשית.png";
import rightImage from "../../images/אנה גרקוב תמונה ימנית.png"
import leftImage from "../../images/אנה גרקוב תמונה שמאלית.png"
import GradientLoader from '../../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>ANNA GREKOV</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני רוצה ללמוד את התחום" icon={learn} to="קורס"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={lips} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;