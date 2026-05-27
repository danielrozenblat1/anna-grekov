import React from 'react';
import styles from './Students.module.css';

// Import your images
import result1 from "../../images/אנה גרקוב תלמידות עם תעודות 1.webp";
import result2 from "../../images/אנה גרקוב תלמידות עם תעודות 2.webp";
import result3 from "../../images/אנה גרקוב תלמידות עם תעודות 3.webp";
import result4 from "../../images/אנה גרקוב תלמידות עם תעודות 4.webp";
import result5 from "../../images/אנה גרקוב תלמידות עם תעודות 5.webp";
import result6 from "../../images/אנה גרקוב תלמידות עם תעודות 6.webp";
import result7 from "../../images/אנה גרקוב תלמידות עם תעודות 7.webp";
import result8 from "../../images/אנה גרקוב תלמידות עם תעודות 8.webp";
import result9 from "../../images/אנה גרקוב תלמידות עם תעודות 9.webp";
import result10 from "../../images/אנה גרקוב תלמידות עם תעודות 10.webp";
import result11 from "../../images/אנה גרקוב תלמידות עם תעודות 11.webp";
import result12 from "../../images/אנה גרקוב תלמידות עם תעודות 12.webp";
import result13 from "../../images/אנה גרקוב תלמידות עם תעודות 13.webp";
import result14 from "../../images/אנה גרקוב תלמידות עם תעודות 14.webp";



const Students = (props) => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, result12, result13, result14
  ];

  return (
    <>

      <div className={styles.title} >{props.title}</div>
      {/* <div className={styles.explain}>
        מקבץ בנות שעברו דרכי
      </div> */}
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
   
      {/* <Button text="אנה, אני רוצה לשמוע עוד" message="היי אנה הגעתי מהדף, אשמח לשמוע עוד על.."/> */}
    </>
  );
};

export default Students;