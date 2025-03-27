import React, { useState } from 'react';
import { BookOpen, Zap, Scissors, Play, Compass, Thermometer, Activity, Hand, Gauge, Heart, 
         Droplet, Pencil, Palette, ArrowUp, ArrowDown, Box, CheckSquare, Image, Cloud, 
         MessageCircle, Star, Camera, FileText, Edit, Plus, Minus } from 'lucide-react';
import styles from './Hishtalmut.module.css';
import HishtalmutButton from '../HishtalmutButton/HishtalmutButton';

const CollapsibleTableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const chapters = [
    { title: "פתיח", icon: <BookOpen strokeWidth={1} /> },
    { title: "סוגי מכשירים", icon: <Zap strokeWidth={1} /> },
    { title: "סוגי סטרוקים", icon: <Scissors strokeWidth={1} /> },
    { title: "הדגמת סוגי סטרוקים", icon: <Play strokeWidth={1} /> },
    { title: "סוגי מחטים", icon: <Compass strokeWidth={1} /> },
    { title: "מאלחשים", icon: <Thermometer strokeWidth={1} /> },
    { title: "רמת כאב", icon: <Activity strokeWidth={1} /> },
    { title: "מנח יד", icon: <Hand strokeWidth={1} /> },
    { title: "מהירות ספק כוח", icon: <Gauge strokeWidth={1} /> },
    { title: "אנטומיה של השפתיים", icon: <Heart strokeWidth={1} /> },
    { title: "צביעה בבלוקים", icon: <Pencil strokeWidth={1} /> },
    { title: "קו מתאר", icon: <Pencil strokeWidth={1} /> },
    { title: "פיגמנטים", icon: <Palette strokeWidth={1} /> },
    { title: "סוגים שונים של פיגמנטים", icon: <Droplet strokeWidth={1} /> },
    { title: "הדגמת צבע", icon: <Palette strokeWidth={1} /> },
    { title: "טיפים לתחילת טיפול", icon: <MessageCircle strokeWidth={1} /> },
    { title: "צילום לפני", icon: <Camera strokeWidth={1} /> },
    { title: "סקיצה", icon: <FileText strokeWidth={1} /> },
    { title: "קו מתאר", icon: <Edit strokeWidth={1} /> },
    { title: "שפה עליונה", icon: <ArrowUp strokeWidth={1} /> },
    { title: "שפה תחתונה", icon: <ArrowDown strokeWidth={1} /> },
    { title: "פינישים", icon: <Star strokeWidth={1} /> },
    { title: "סוף טיפול והכנה של האזור לצילום", icon: <Box strokeWidth={1} /> },
    { title: "טיפים לסוף טיפול", icon: <CheckSquare strokeWidth={1} /> },
    { title: "צילום", icon: <Image strokeWidth={1} /> },
    { title: "שפה כהה", icon: <Cloud strokeWidth={1} /> }
  ];
  
  return <>
    <div className={`${styles.tocContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.tocHeader} onClick={toggleOpen}>
        <div className={styles.tocHeaderContent}>
          <h2 className={styles.tocTitle}>לפתיחת תוכן העניינים לחצו כאן:</h2>
          <p className={styles.tocSubtitle}>26 הפרקים שיטיסו את הרמה שלך כמה שלבים למעלה</p>
        </div>
        <div className={styles.toggleIcon}>
          {isOpen ? <Minus strokeWidth={1} /> : <Plus strokeWidth={1} />}
        </div>
      </div>
      
      <div className={styles.tocContent}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
       
            <div className={styles.chaptersGrid}>
              {chapters.map((chapter, index) => (
                <div key={index} className={styles.chapterItem}>
                  <div className={styles.chapterContent}>
                    <div className={styles.chapterIcon}>
                      {chapter.icon}
                    </div>
                    <h2 className={styles.chapterTitle}>{chapter.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <HishtalmutButton text="אנה,אני בפנים!" link="https://my.schooler.biz/s/90418/Levelup/69LO0J4"/>
        </div>
      
      </div>
    
    </div>
   
  </>
};

export default CollapsibleTableOfContents;