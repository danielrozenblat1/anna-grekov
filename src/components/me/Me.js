import React from 'react';
import styles from './Me.module.css';
import Button from '../WAbutton/Button';
import annaImage from "../../images/אנה גרקוב תמונת תדמית.png";
import achievement1 from "../../images/אנה הישגים.png"; // Update with your actual image path
import achievement2 from "../../images/אנה הישגים 2.png"; // Update with your actual image path
import Recommends from '../recommends/Recommends';

const AboutMe = () => {


  return (
    <>
      <div className={styles.header} id="מי אני">אז לפני שנצלול למים.. בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={annaImage} alt="אנה גרקוב" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>אנה גרקוב</h1>
          <div className={styles.subtitle}>"בחיים שלי לא הייתי מלאת תשוקה והישגיות כמו בתחום האיפור הקבוע"</div>
          <p className={styles.description}>
            הסיפור שלי מתחיל דווקא בעולם המשפט. כעורכת דין עם שני תארים, חשבתי שמצאתי את הקריירה שלי.
            חייתי מיום ליום ואפילו הרווחתי יפה אבל הרגשתי שאני לא אמורה להיות שם, אף פעם לא חתרתי למצויינות והסתפקתי במה שהשגתי 
            ובדיוק כמוך, בגיל 30 קפצה לי מודעה שקשורה לתחום הביוטי, הסתקרנתי ולקחתי את הצעד! נרשמתי ללמוד את תחום האיפור הקבוע!
          </p>
          <p className={styles.description}>
            כבר מהשיעור הראשון הבנתי שזה זה! אני דוחפת את עצמי ליותר, אני רוצה להצליח, אני מתרגלת ולומדת ואפילו מגיעה לתוצאות מדהימות! הרגשתי שאני נמצאת סוף סוף במקום שאני צריכה להיות בו. התשוקה הזו הובילה אותי להישגים מדהימים בתחום!. היום, אחרי זמן קצר בתחום, אני גאה להעביר את הידע והניסיון שלי הלאה. 
     
          </p>
          <p className={styles.description}>
            אני כאן כדי ללוות אותך צעד אחר צעד בדרך להגשמת החלום שלך, 
            בין אם את רוצה להתחיל קריירה חדשה או להוסיף שירות רווחי לעסק הקיים שלך. 
            ביחד נבנה את הדרך שלך להצלחה בעולם האיפור הקבוע.
          </p>
        </div>
      </div>

      <div className={styles.centeredSection}>

        <p className={`${styles.description} ${styles.centered}`}>
          תוך זמן קצר של התמדה ונחישות הפכתי מעורכת דין למאסטרית באיפור קבוע
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
          התשוקה וההתמדה שלי גם כשהדברים היו קשים הובילו אותי לשם
        </p>
        <h2 className={`${styles.description} ${styles.centered}`}>
         ואני מאמינה שעם הכוונה נכונה ומשמעת גבוהה גם את תוכלי למלא יומן ולצבור שם בתחום המתגמל ביותר בעולם הביוטי!
        </h2>
     

      </div>
      
      <Button text="בואי נתחיל את המסע שלך!" message="היי אנה הגעתי מהדף, אני רוצה לשמוע עוד על הקורס"/>
    </>
  );
};

export default AboutMe;