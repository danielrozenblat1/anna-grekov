import React from 'react';
import { DollarSign, Clock } from 'lucide-react';
import styles from './SecondScreen.module.css';
import Students from '../../components/recommends/Students';
import IconTextComponent from '../../components/can/Can';
import check from "../../Icons/wired-lineal-24-approved-checked-morph-check-appear.json"
import business from "../../Icons/wired-lineal-187-suitcase-hover-pinch (1).json"
import money from "../../Icons/wired-lineal-414-money-bag-dollar-hover-shake (7).json"
import service from "../../Icons/wired-lineal-2882-trolley-full-hover-pinch.json"
import IconTextComponentNew from '../../components/can/NewCan';
import Button from '../../components/WAbutton/Button';
const SecondScreen = () => {
    return <>
      
            <div className={styles.title} id="קורס">את לא כאן סתם</div>
            <div className={styles.description}>אם הגעת לכאן את מאוהבת ואפילו כבר עוסקת בתחום הביוטי אבל לאחרונה התחלת להגיע למסקנה ש</div>
            <div className={styles.titleSpecial}>הזמן שלך יכול להיות שווה הרבה יותר כסף</div>
           
            <div className={styles.description}>ואחרי עשרות תלמידות שעברו אצלי אני אומרת לך בפה מלא</div>
            <div className={styles.title}>זה אפשרי!</div>
            <Students/>

            {/* <div className={styles.title}>חשוב לי מאוד לשקף בפנייך</div> */}
            <div className={styles.title}>כל תלמידה שעוברת דרכי יוצאת עם</div>
            <div className={styles.row}>
    <IconTextComponentNew text="הזדמנות להפוך כל שעת עבודה שלה להרבה יותר רווחית" icon={money}/>
    <IconTextComponentNew text="מקצוע חדש ביד וכלים לבניית קריירה בתחום מבוקש ורווחי" icon={business}/>
    <IconTextComponentNew text="שירות נוסף לספק לקהל הלקוחות שלה" icon={service}/>
            </div>
            <div className={styles.titleSilver}>ועדיין חשוב לי להדגיש</div>
            <div className={styles.description}>אני לא באה למכור לך חלום!</div>
            <div className={styles.title}>הצלחה בתחום תדרוש ממך</div>
        <div className={styles.row}>
        <IconTextComponent text="נחישות והתמדה גם כשהדרך מאתגרת" icon={check}/>
    <IconTextComponent text="תרגול עקבי שיוביל למצוינות מקצועית" icon={check}/>
    <IconTextComponent text="סבלנות - לוקח זמן להשיג ולבנות בסיס לקוחות " icon={check}/>
        </div>
 
   <Button text="אנה, בואי ניתן בראש!"/>
</>
};

export default SecondScreen;