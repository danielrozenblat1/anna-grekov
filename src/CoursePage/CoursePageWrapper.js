import React from 'react';
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