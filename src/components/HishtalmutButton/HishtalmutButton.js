import styles from "./HishtalmutButton.module.css";

const HishtalmutButton = (props) => {
  const handleButtonClick = () => {
    // אם יש לינק בפרופס, נפתח אותו בחלון חדש
    if (props.link) {
      window.open(props.link, "_blank");
    } 
    // אחרת, נשתמש בלוגיקת הווצאפ
    else {
      const phoneNumber = "+972508668138";
      // קביעת תוכן ההודעה
      const message = props.message ? props.message : "היי אנה ,אני רוצה לשמוע ממך עוד על..";
      
      // קידוד ההודעה עבור ה-URL
      const encodedMessage = encodeURIComponent(message);
      
      // בניית כתובת ה-URL של הווצאפ עם מספר הטלפון וההודעה
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // פתיחת ה-URL בלשונית חדשה
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <div className={styles.center}>
      <button 
        className={styles.button} 
        onClick={handleButtonClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default HishtalmutButton;