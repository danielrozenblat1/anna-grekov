import React from 'react';
import { Clock, Heart, Award, Star, Shield, Users } from 'lucide-react';
import styles from './Trending.module.css';

const TextWithIcon = ({ text, icon: Icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const StyledMessages = () => {
  const messages = [
    {
      text: "הטיפולים לוקחים לך המון זמן וסוחטים אותך אנרגטית",
      icon: Clock
    },
    {
      text: "הלקוחות יוצאות מנופחות לאחר הטיפול ולא מרגישות הכי בנוח",
      icon: Heart
    },
    {
      text: "את לא מצליחה להוציא תמונות איכותיות מהטיפול",
      icon: Shield
    },
    {
      text: "יש פער בין מה שלמדת לבין הביצועים שלך",
      icon: Award
    }
  ];

  return (
    <div className={`${styles.container} ${styles.wrapContainer}`}>
      {messages.map((message, index) => (
        <TextWithIcon 
          key={index} 
          text={message.text} 
          icon={message.icon}
        />
      ))}
    </div>
  );
};

export default StyledMessages;