import Bonus from "../components/newBox/NewBox"
import styles from "./ThirdScreen.module.css"
import shake from "../Icons/wired-outline-456-handshake-deal-hover-pinch (2).json"
import knowledge from "../Icons/wired-outline-406-study-graduation-hover-pinch (1).json"
import community from "../Icons/wired-outline-273-three-female-avatars-hover-nodding (1).json"
import certificate from "../Icons/wired-outline-1483-parchment-hover-pinch (1).json"
import Syllabus from "../components/Sillabus/Sillabus"
import Button from "../components/WAbutton/Button"
import Works from "../components/recommends/Works"
const ThirdScreen = () => {
  return (
    <>
 
      <div className={styles.title}>חשוב שתדעי!</div>
      <div className={styles.description}>מעבר לידע המקצועי, כל תלמידה ותלמידה שלי תצא ממני עם</div>
      <div className={styles.row}>
        <Bonus 
          title="תעודת הסמכה"
          description="תעודת הסמכה מקצועית המעידה על השלמת הקורס והכשרתך בתחום"
          icon={certificate} 
        />
        <Bonus 
          title="תמיכה אישית"
          description="ליווי וזמינות מלאה לאחר סיום הקורס לכל שאלה, התייעצות, חשש או אי הבנה"
          icon={shake} 
        />
   
        <Bonus 
          title="קהילה מקצועית ותומכת"
          description="קהילה תומכת של מעל 150 נשים מקצועיות בתחום"
          icon={community} 
        />
      </div>
    
      <div className={styles.description}>ואיך לא..</div>
      <div className={styles.title}>קצת תוצאות..</div>
      <Works/>
    </>
  )
}

export default ThirdScreen