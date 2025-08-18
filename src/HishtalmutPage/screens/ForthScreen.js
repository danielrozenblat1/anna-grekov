import React from 'react';
import styles from './ForthScreen.module.css';
import Fit from '../../components/Fit/Fit';


const ForthScreen = () => {
  return <>
  <div className={styles.container}>
  <div className={styles.title}>ההשתלמות לא מתאימה לכולן</div>

<Fit/>
  </div>
  </>

};

export default ForthScreen;