import React from 'react';
import styles from './ForthScreen.module.css';
import Box from '../components/box/Box';
import lips from "../Icons/wired-lineal-1597-lips-hover-pinch (1).json"
import mirror from "../Icons/wired-lineal-1589-makeup-mirror-hover-pinch.json"
import pencil from "../Icons/wired-lineal-35-edit-hover-line.json"
import lipstick from "../Icons/wired-lineal-1559-lipstick-hover-pinch.json"
import Benefit from '../components/Benefit/Benefit';
import Anna from '../components/recommends/Anna';
import AnnaE from '../components/recommends/AnnaE';
const ForthScreen = () => {
   
    return <>
<div className={styles.title} id="טיפולים">הטיפולים שלי</div>
<div className={styles.description}>אם לאחרונה התעניינת בטיפולי איפור קבוע אז אני כאן <strong style={{fontFamily:"Assistant"}}>לעשות לך סדר בבלאגן</strong></div>
<div className={styles.subtitle}>אם מצאת את עצמך לאחרונה</div>
<div className={styles.row}>
<Box title="מבזבזת זמן כל בוקר בהתארגנות" description="כדי להספיק להגיע לעבודה בזמן את מוצאת את עצמך קמה שעה וחצי קודם רק כדי להתארגן ולהתאפר בצורה שאיכשהו מספקת אותך" icon={mirror}/>
<Box title="מתעסקת עם העפרון ומתקנת את עצמך" description="כל בוקר מחדש.. עוברת עם העפרון ומתאמצת להשאר בקווים ושהכל יהיה מדוייק" icon={pencil}/>
<Box title="מתקנת את האודם כל היום" description="רק רצית לשתות קפה בנחת אבל האודם נמרח על כל הכוס ועכשיו את צריכה לתקן אותו.. ושלא נדבר על מה שקורה כשאת קצת מזיעה" icon={lipstick}/>
</div>
<div className={styles.description}>והגעת למסקנה <div style={{textDecoration:"underline", display:"inline"}}>שהגיע הזמן לשינוי</div></div>
<div className={styles.title}>את במקום הנכון! <br/> בעזרת איפור קבוע</div>

<Benefit/>
<Anna/>
<AnnaE/>
</>
};

export default ForthScreen;