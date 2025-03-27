import React from 'react';
import styles from './SixthScreen.module.css';
import StyledMessages from '../../components/trend/Trending';
import { BenefitsContainer } from '../../components/benefitsHistalmut/BenefitHishtalmut';
import taste from "../../videos/אנה הצצה לקורס.mp4"
import ByMe from '../../components/ByMeH/ByMe';
import HishtalmutButton from '../../components/HishtalmutButton/HishtalmutButton';
const SixthScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>ושנייה לפני שנתראה שם..</div>
      <div className={styles.description}>אני רוצה לתת לך טעימה קטנה מההשתלמות</div>
      
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video}
          controls
          poster="/path-to-your-thumbnail.jpg"
        >
          <source src={taste} type="video/mp4" />
          הדפדפן שלך לא תומך בתגית וידאו.
        </video>
        <div className={styles.videoShadow}></div>
      </div>
    <HishtalmutButton text="יאללה, אני בפנים!" link="https://my.schooler.biz/s/90418/Levelup/69LO0J4"/>
      <ByMe/>
    </div>
  );
};

export default SixthScreen;