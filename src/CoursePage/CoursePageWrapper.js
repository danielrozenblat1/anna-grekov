import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './CoursePageWrapper.module.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from '../components/me/Me';
import Syllabus from '../components/Sillabus/Sillabus';
import ForthScreen from './screens/ForthScreen';
import ByMe from '../components/ByMe/ByMe';
import PrivacyPolicy from '../components/privacy/Privacy';

const CoursePageWrapper = () => {

    return <>
    <Helmet>
      <title>אנה גרקוב - קורס איפור קבוע | מאסטרית איפור קבוע</title>
      <meta name="description" content="אנה גרקוב - מאסטרית איפור קבוע וזוכת תחרויות בינלאומיות. קורס איפור קבוע מקצועי הכולל הכשרה מעשית, ליווי אישי וסיוע בהשמה. הצטרפי עכשיו!" />
      <link rel="canonical" href="https://annagrekov.co.il/" />
      <meta property="og:title" content="אנה גרקוב - קורס איפור קבוע | מאסטרית איפור קבוע" />
      <meta property="og:description" content="אנה גרקוב - מאסטרית איפור קבוע וזוכת תחרויות בינלאומיות. קורס איפור קבוע מקצועי הכולל הכשרה מעשית, ליווי אישי וסיוע בהשמה." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://annagrekov.co.il/" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:image" content="https://annagrekov.co.il/אנה גרקוב תדמית.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="אנה גרקוב - קורס איפור קבוע | מאסטרית איפור קבוע" />
      <meta name="twitter:description" content="אנה גרקוב - מאסטרית איפור קבוע וזוכת תחרויות בינלאומיות. קורס איפור קבוע מקצועי הכולל הכשרה מעשית, ליווי אישי וסיוע בהשמה." />
      <meta name="twitter:image" content="https://annagrekov.co.il/אנה גרקוב תדמית.png" />
    </Helmet>
    <FirstScreen/>
    <SecondScreen/>
    <AboutMe/>
  <Syllabus/>
<ForthScreen/>
<PrivacyPolicy 
  ownerName="אנה גרקוב" 
  email="annmush11@gmail.com" 
  phone="+972 50-866-8138" 
  domain="https://annagrekov.co.il/" 
/>
<ByMe/>
</>
};

export default CoursePageWrapper;