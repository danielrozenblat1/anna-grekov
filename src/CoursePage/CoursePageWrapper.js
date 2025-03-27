import React from 'react';
import styles from './CoursePageWrapper.module.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from '../components/me/Me';
import Syllabus from '../components/Sillabus/Sillabus';
import ForthScreen from './screens/ForthScreen';
import ByMe from '../components/ByMe/ByMe';

const CoursePageWrapper = () => {
   
    return <>
    <FirstScreen/>
    <SecondScreen/>
    <AboutMe/>
  <Syllabus/>
<ForthScreen/>
<ByMe/>
</>
};

export default CoursePageWrapper;