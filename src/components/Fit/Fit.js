import React from 'react';
import styles from './Fit.module.css';
import HishtalmutButton from '../HishtalmutButton/HishtalmutButton';

const Fit = () => {
  const forWhom = [
    "מקצועניות שהשתתפו בקורס ראשוני ורוצות להעלות רמה",
    "מי שמרגישה שהיא צריכה לקצר זמני עבודה ולהתייעל",
    "מי שמחפשת להוציא לקוחות עם החלמה מהירה יותר",
    "מי שרוצה לשפר שרטוט נכון או התאמת פיגמנט בצורה מקצועית",
    "מי שרוצה לשפר את איכות הטיפול הכללית",
    "מי שרוצה לשפר את יכולות הצילום והתיעוד של העבודות שלה",
  ];

  const notForWhom = [
    "מי שלא עברה קורס ראשוני בתחום",
    "מי שלא מתכוונת ליישם את הידע שתלמד",
    "מי שחושבת שהקורס יפתור את כל הבעיות ללא השקעה מצידה",
    "מי שמחפשת רק קורס פרונטלי בלבד",
  ];

  return <>
    <div className={styles.container}>
 
      
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <h3 className={styles.columnTitle}>ההשתלמות מתאימה ל:</h3>
          </div>
          <ul className={styles.list}>
            {forWhom.map((item, index) => (
              <li key={`for-${index}`} className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <h3 className={styles.columnTitle}>ההשתלמות פחות מתאימה ל:</h3>
          </div>
          <ul className={styles.list}>
            {notForWhom.map((item, index) => (
              <li key={`not-${index}`} className={styles.listItem}>
                <span className={styles.xmark}>✗</span>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <HishtalmutButton text="אנה,תשלחי אותי להשתלמות!" link="https://my.schooler.biz/s/90418/Levelup/69LO0J4"/>
  </>
};

export default Fit;