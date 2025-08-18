import React from 'react';
import styles from './FirstScreen.module.css';
import anna from "../../images/אנה גרקוב השתלמות תדמית.png";
// You'll need to import your background image
// For example: import backgroundImage from "../../images/background.jpg";

const FirstScreen = () => {
  // Function to scroll to the intro section
  const scrollToIntro = () => {
    const introSection = document.getElementById("מסך פתיחה");
    if (introSection) {
      // Smooth scroll with 1 second duration to 150px above the element
      window.scrollTo({
        top: introSection.offsetTop - 150, // 150px above the element
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* Background image container with opacity */}
      <div className={styles.backgroundImage}></div>
      
      <div className={styles.intro}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainTextInner}>
            <p className={styles.mainText}>לאחר שהכשירה מאות מדריכות וטיפלה באלפי לקוחות מרוצות <br/> אנה גרקוב מציגה:</p>
          </div>
        </div>
        
        <div className={styles.titleContainer}>
          <div className={styles.levelUpContainer}>
            <span className={styles.levelUpText}>השתלמות</span>
            <div className={styles.levelUpGlow}></div>
          </div>
          <div className={styles.levelUpContainer}>
            <span className={`${styles.levelUpText} ${styles.english}`}>LEVEL UP</span>
            <div className={styles.levelUpGlow}></div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={anna} alt="השתלמות העלאת רמה" />
        </div>
        
        <div className={styles.buttonContainer}>
          <a 
            href="https://my.schooler.biz/s/90418/Levelup/69LO0J4" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
            style={{ textDecoration: 'none' }}
          >
            אנה, תני לי את ההשתלמות
          </a>
          <button 
            className={styles.button} 
            onClick={scrollToIntro}
          >
            ספרי לי עוד קצת
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;