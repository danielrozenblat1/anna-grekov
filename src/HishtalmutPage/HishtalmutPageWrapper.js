import React from 'react';
import { Helmet } from 'react-helmet-async';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from '../components/CourseNav/NavBarNew';
import CourseMe from '../components/CourseMe/CourseMe';

import ThirdScreen from './screens/ThirdScreen';

import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';




const HishtalmutPageWrapper = () => {

    return <>
    <Helmet>
      <title>השתלמות Level Up - אנה גרקוב | העלאת רמה באיפור קבוע</title>
      <meta name="description" content="השתלמות Level Up עם אנה גרקוב - קורס מתקדם להעלאת רמה באיפור קבוע. שיטות עבודה מתקדמות, תרגול מעשי וליווי מקצועי לאמניות איפור קבוע מנוסות." />
      <link rel="canonical" href="https://annagrekov.co.il/hishtalmut" />
      <meta property="og:title" content="השתלמות Level Up - אנה גרקוב | העלאת רמה באיפור קבוע" />
      <meta property="og:description" content="השתלמות Level Up עם אנה גרקוב - קורס מתקדם להעלאת רמה באיפור קבוע. שיטות עבודה מתקדמות, תרגול מעשי וליווי מקצועי." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://annagrekov.co.il/hishtalmut" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:image" content="https://annagrekov.co.il/אנה גרקוב תדמית.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="השתלמות Level Up - אנה גרקוב | העלאת רמה באיפור קבוע" />
      <meta name="twitter:description" content="השתלמות Level Up עם אנה גרקוב - קורס מתקדם להעלאת רמה באיפור קבוע. שיטות עבודה מתקדמות, תרגול מעשי וליווי מקצועי." />
      <meta name="twitter:image" content="https://annagrekov.co.il/אנה גרקוב תדמית.png" />
    </Helmet>
    <div style={{overflowX:"hidden"}}>
 <NavBarNew/>
    <FirstScreen/>
    <SecondScreen/>
  <CourseMe/>
  <ThirdScreen/>
<ForthScreen/>

<FifthScreen/>
<SixthScreen/>

</div>
</>
};

export default HishtalmutPageWrapper;