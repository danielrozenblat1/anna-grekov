import React from 'react';
import { 
  Clock, 
  MapPin, 
  Sparkles,
  Heart,
  Shield,
  AlertCircle,
  FileText,
  Syringe,
  ScanLine,
  Hand,
  Smile,
  PenTool,
  Palette,
  Award,
  Camera,
  Instagram,
  GraduationCap,
  Trophy
} from 'lucide-react';
import styles from './Sillabus.module.css';
import ThirdScreen from '../../screens/ThirdScreen';
import Recommends from '../recommends/Recommends';
import Button from '../WAbutton/Button';

const Syllabus = () => {
  const courseData = {
    days: [
      {
        number: "01",
        content: [
          "מבוא למיקרופיגמנטציה",
          "מבנה העור וסוגי העור",
          "שלבי החלמה",
          "איסורים והגבלות",
          "הצהרת בריאות",
          "מאלחשים",
          "סוגי מחטים ומאפייניהם",
          "סוגי מכונות - סטרוק קצר/ארוך",
          "מנח יד - אימונים על לטקס"
        ]
      },
      {
        number: "02",
        content: [
          "מבנה השפתיים ואזורים מיוחדים",
          "יסודות הסקיצה",
          "קו מתאר",
          "טכניקת אקוורל / אודם",
          "פיגמנטולוגיה קלוריסטיקה",
          "בונוס - לימוד ניטרול שפתיים כהות",
          "סודות וטיפים לעריכה וצילום ברמה גבוהה",
          "ניהול עמוד אינסטגרם",
          "אימונים על לטקס"
        ]
      },
      {
        number: "03",
        content: [
          "אימונים על לטקס",
          "חלק מעשי - עבודה על מודליסטית",
      
        ]
      },
      {
        number: "04",
        content: [
          "חלק מעשי - עבודה על מודליסטית",
          "קבלת תעודה!"
        ]
      }
    ]
  };

  const getIconForContent = (content) => {
    const iconMap = {
      "מבוא למיקרופיגמנטציה": <Sparkles color='white' />,
      "מבנה העור וסוגי העור": <Heart color='white' />,
      "שלבי החלמה": <Shield color='white' />,
      "איסורים והגבלות": <AlertCircle color='white' />,
      "הצהרת בריאות": <FileText color='white' />,
      "מאלחשים": <Syringe color='white' />,
      "סוגי מחטים ומאפייניהם": <ScanLine color='white' />,
      "סוגי מכונות - סטרוק קצר/ארוך": <ScanLine color='white' />,
      "מנח יד - אימונים על לטקס": <Hand color='white' />,
      "מבנה השפתיים ואזורים מיוחדים": <Smile color='white' />,
      "יסודות הסקיצה": <PenTool color='white' />,
      "קו מתאר": <PenTool color='white' />,
      "טכניקת אקוורל / אודם": <Palette color='white' />,
      "פיגמנטולוגיה קלוריסטיקה": <Palette color='white' />,
      "בונוס - לימוד ניטרול שפתיים כהות": <Award color='white' />,
      "סודות וטיפים לעריכה וצילום ברמה גבוהה": <Camera color='white' />,
      "ניהול עמוד אינסטגרם": <Instagram color='white' />,
      "אימונים על לטקס": <Hand color='white' />,
      "סקיצה": <PenTool color='white' />,
      "הכנה לשיעורים מעשיים": <GraduationCap color='white' />,
      "חלק מעשי - עבודה על מודליסטית": <Hand color='white' />,
      "קבלת תעודה!": <Trophy color='white' />
    };
  
    return iconMap[content] || <Sparkles color='white' />;
  };

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>תחזיקי חזק.. ככה זה הולך לעבוד</h1>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <Clock color='white' />
              <span className={styles.infoText}>09:30 - 16:30</span>
            </div>
            <div className={styles.infoCard}>
              <MapPin color='white' />
              <span className={styles.infoText}>מודיעין</span>
            </div>
          </div>
        </div>

        <div className={styles.daysContainer}>
          {courseData.days.map(day => (
          <div key={day.number} className={`${styles.dayCard} ${styles['day' + day.number]}`}>
              <div className={styles.dayHeader}>
                <h2 className={styles.dayTitle}>יום מספר</h2>
                <span className={styles.dayNumber}>{day.number}</span>
              </div>
              <div className={styles.itemList}>
                {day.content.map((item, index) => (
                  <div key={index} className={styles.item}>
                    {getIconForContent(item)}
                    <span className={styles.itemText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

    

    
      </div>
      <ThirdScreen/>
      <Recommends/>
      <Button text="הדרך שלנו מתחילה בלחיצה כאן!"/>
    </div>

  );
};

export default Syllabus;