import React from 'react';
import { Check } from 'lucide-react';
import styles from './Benefit.module.css';

const Benefit = () => {
    const benefits = [
        "תחסכי זמן יקר בהתארגנות הבוקר ותפחיתי התעסקות מיותרת",

       
     
        "תיהני בבריכה ובים בלי חשש שהאיפור יורד",
        "תשתי קפה בכיף בלי לדאוג למריחת אודם",

        "תוכלי לתקן אסימטריה ולטשטש צלקות בקלות",
    
        "תקבלי מראה טבעי ועשיר שמחזיק לאורך זמן"
      ];
    

  return (
    <div className={styles.container}>

      <div className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitItem}>
            <Check className={styles.checkIcon} size={24} />
            <p className={styles.benefitText}>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;