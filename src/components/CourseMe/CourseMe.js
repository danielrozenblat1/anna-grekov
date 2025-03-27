import React from 'react';
import styles from './CourseMe.module.css';
import HishtalmutButton from '../HishtalmutButton/HishtalmutButton';
import annaImage from "../../images/אנה גרקוב תמונת תדמית.png";
import achievement1 from "../../images/אנה הישגים לבן.png";
import achievement2 from "../../images/אנה הישגים 2 לבן.png";
import AnnaWorks from '../recommends/AnnaWorks';
import StudentsHishtalmut from '../recommends/StudentsHishtalmut';

const AboutMe = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      
      {/* First container with metallic styling */}
      <div className={styles.metallicContainer}>
        <div className={styles.imageContainer}>
          <img src={annaImage} alt="אנה גרקוב" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>אנה גרקוב</h1>
          <div className={styles.subtitle}>"מעולם לא הרגשתי מיומנות, שליטה והתלהבות כמו בתחום האיפור הקבוע"</div>
          <div className={styles.description}>
            <p>
              הסיפור שלי מתחיל דווקא בעולם המשפט. כעורכת דין עם שני תארים, חשבתי שמצאתי את הקריירה שלי.
              עבדתי והתפרנסתי, אבל תמיד הרגשתי שאני מוגבלת במה שאני יכולה להשיג. לא חוויתי את אותה תחושת סיפוק והגשמה שהייתי רוצה
              ובדיוק כמוך, בגיל 30 התוודעתי לעולם האיפור הקבוע, והחלטתי לעשות מהלך משמעותי - להפוך למקצוענית אמיתית בתחום!
            </p>
            
            <p>
              כבר מהרגע הראשון הרגשתי את ההבדל! פתאום שאפתי למצוינות, חיפשתי כל דרך להשתפר, לדייק, להגיע לרמת מומחיות שתביא תוצאות מושלמות! כל טיפול הפך לחוויה אומנותית, וראיתי את האושר בעיניים של הלקוחות כשהן רואות את התוצאה. המקצועיות והדיוק שפיתחתי הובילו אותי להישגים שמעולם לא דמיינתי!
            </p>
            
            <p>
              היום אני כאן כדי להוביל אותך אל אותה רמת מומחיות ומקצועיות, 
              בין אם את רוצה להפוך למאסטרית מובילה בתחום או לשדרג את היכולות המקצועיות בעסק הקיים שלך. 
              ביחד נעלה את הרמה המקצועית שלך למקום שיגרום ללקוחות שלך להיות מרוצות מעבר למה שחלמת.
            </p>
          </div>
        </div>
      </div>

      {/* Second container with original styling */}
      <div className={styles.originalContainer}>
        <div className={styles.centeredSection}>
          <p className={`${styles.description} ${styles.centered}`}>
            בזכות מקצועיות, דיוק והתמדה, הפכתי מעורכת דין למאסטרית מוערכת באיפור קבוע
          </p>
          
          <div className={styles.row}>
            <div className={styles.achievementImage}>
              <img src={achievement1} alt="מקום שני בתחרות הארצית לאיפור קבוע" className={styles.image} />
            </div>
            <div className={styles.achievementImage}>
              <img src={achievement2} alt="מקום שלישי בתחרות הבינלאומית לאיפור קבוע" className={styles.image} />
            </div>
          </div>

          <p className={`${styles.description} ${styles.centered}`}>
            השאיפה למקצועיות ודיוק מושלם בכל טיפול היא שהובילה אותי להישגים אלה
          </p>
          <h2 className={`${styles.description} ${styles.centered}`}>
           ואני מאמינה שעם הדרכה מקצועית ושיטות עבודה מדויקות, גם את תוכלי להגיע לרמת מומחיות שתספק חוויה מושלמת ללקוחות ותבנה לך שם בעולם האיפור הקבוע!
          </h2>
        </div>
        <AnnaWorks/>
   <StudentsHishtalmut title="ועשרות תלמידות"/>
      </div>
     
    </div>
  );
};

export default AboutMe;