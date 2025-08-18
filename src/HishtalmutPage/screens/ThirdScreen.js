import React from 'react';
import styles from './ThirdScreen.module.css';
import StyledMessages from '../../components/trend/Trending';
import { BenefitsContainer } from '../../components/benefitsHistalmut/BenefitHishtalmut';
import CollapsibleTableOfContents from '../../components/Hishtalmut/Hishtalmut';
import HishtalmutButton from '../../components/HishtalmutButton/HishtalmutButton';
import Bonus from '../../components/newBox/NewBox';
import whatss from "../../Icons/wired-lineal-2627-logo-circle-whatsapp-hover-roll.json"
import month from "../../Icons/wired-lineal-28-calendar-hover-pinch.json"
import answers from "../../Icons/wired-lineal-958-faq-frequent-ask-questions-hover-slide.json"
const ThirdScreen = () => {
  return <>
  <div className={styles.container}  >
  <div className={styles.title}>והיום</div>
<div className={styles.description}>החלטתי לקחת את הידע שצברתי במהלך השנים צעד אחד קדימה</div>
<div className={styles.title}>ולהנגיש אותו לכולן</div>
<div className={styles.description} style={{textDecoration: "underline", textDecorationColor: "silver"}}>במחיר שנגיש לכל כיס</div>
<div className={styles.title}>תחזיקו חזק.. יוצאות לדרך</div>
<CollapsibleTableOfContents/>
<div className={styles.title}>וזה לא הסוף!</div>
<div className={styles.description}>כל מי שרוכשת את ההשתלמות מקבלת גם:</div>
<div className={styles.row}>
<Bonus title="גישה ל-3 חודשים מלאים" description="מרגע הרכישה יש לך גישה ל-3 חודשים שתוכלי לצפות בתוכן שוב ושוב ושוב - וכמובן מוטיבציה מוגברת לסיים אותו ולממש את הקנייה שלך!" icon={month}/>
<Bonus title="הצטרפות לקהילת הווצאפ שלי" description="את נכנסת לקהילה של מעל ל-100 נשים בתחום השפתיים שתומכות, לומדות, מייעצות ומתפתחות יחד" icon={whatss}/>
<Bonus title="תמיכה,עזרה ומענה אישי" description="אני כאן! למקרה שהסתבכת עם אחד הפרקים,לכל שאלה , משוב והתייעצות" icon={answers}/>

</div>
<HishtalmutButton text="אנה,תשלחי אותי להשתלמות!" link="https://my.schooler.biz/s/90418/Levelup/69LO0J4"/>
  </div>
  </>

};

export default ThirdScreen;