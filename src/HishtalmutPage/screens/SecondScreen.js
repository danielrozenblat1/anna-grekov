import React from 'react';
import styles from './SecondScreen.module.css';
import StyledMessages from '../../components/trend/Trending';
import { BenefitsContainer } from '../../components/benefitsHistalmut/BenefitHishtalmut';


const SecondScreen = () => {
  return <>
  <div className={styles.container} id="מסך פתיחה" >
  <div className={styles.title}>אם את כאן</div>
  <div className={styles.description}>סימן שעברת כבר קורס או השתלמות איפור קבוע אבל את מרגישה ש </div>
    <StyledMessages/>
    <div className={styles.description}>ושורה תחתונה</div>
    <div className={styles.title}>את רוצה להעלות את הרמה שלך</div>
    <div className={styles.description}>ולהגיע למצב שאת</div>
    <BenefitsContainer/>
    <div className={styles.title}>אז שנייה לפני שאני חושפת את כל הסודות שלי..</div>
  </div>
  </>

};

export default SecondScreen;