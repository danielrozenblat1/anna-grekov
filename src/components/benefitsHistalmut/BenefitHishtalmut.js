import React from 'react';
import { Clock, Award, Heart, Zap, Camera, CheckCircle } from 'lucide-react'; // אייקונים רלוונטיים להשתלמות
import styles from './BenefitHishtalmut.module.css';

const VerticalIconCard = ({ icon: Icon = CheckCircle, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

// יתרונות ההשתלמות של אנה מנקודת מבט התלמידה
const BenefitsContainer = () => {
  const benefits = [
    {
      icon: Clock,
      text: "מקצרת את זמני הטיפול ב-30% ומקבלת יותר לקוחות ביום עבודה"
    },
    {
      icon: Award,
      text: "משפרת משמעותית את רמת הטיפול ומשיגה תוצאות מושלמות כבר מהטיפול הראשון"
    },
    {
      icon: Heart,
      text: "מוציאה לקוחות מרוצות יותר עם נפיחות מינימלית והחלמה מהירה"
    },
    {
      icon: Zap,
      text: "שולטת בטכניקות מתקדמות להתאמת פיגמנט מושלמת ושרטוט מדויק"
    },
    {
      icon: Camera,
      text: "מציגה תיק עבודות מרשים ומושך לקוחות בזכות יכולות צילום משופרות"
    },
    {
      icon: CheckCircle,
      text: "עובדת בצורה מובנית ומסודרת והופכת למקצועית יותר ובטוחה בעצמך"
    }
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard key={index} icon={benefit.icon} text={benefit.text} />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };