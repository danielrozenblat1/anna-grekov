import styles from "./Recommends.module.css"
import result1 from "../../images/אנה גרקוב עבודות של תלמידות 1.webp"
import result2 from "../../images/אנה גרקוב עבודות של תלמידות 2.webp"
import result3 from "../../images/אנה גרקוב עבודות של תלמידות 3.webp"
import result4 from "../../images/אנה גרקוב עבודות של תלמידות 4.webp"
import result5 from "../../images/אנה גרקוב עבודות של תלמידות 5.webp"
import result6 from "../../images/אנה גרקוב עבודות של תלמידות 6.webp"
import result7 from "../../images/אנה גרקוב עבודות של תלמידות 7.webp"
import result8 from "../../images/אנה גרקוב עבודות של תלמידות 8.webp"
import result9 from "../../images/אנה גרקוב עבודות של תלמידות 9.webp"
import result10 from "../../images/אנה גרקוב עבודות של תלמידות 10.webp"
import result11 from  "../../images/אנה גרקוב עבודות של תלמידות 11.webp"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Works=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result11,
        },
        
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.explain} id="לקוחות ממליצות">הכנתי לך מקבץ עבודות של תלמידות שלי - עוד בזמן הקורס! החליקי בין התמונות</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img loading="lazy" src={item.src} className={styles.image1} alt={`אנה גרקוב לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

</>


}
export default Works