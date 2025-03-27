import React from 'react';
import styles from './HishtalmutPageWrapper.module.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from '../components/CourseNav/NavBarNew';
import CourseMe from '../components/CourseMe/CourseMe';
import Anna from '../components/recommends/Anna';
import AnnaWorks from '../components/recommends/AnnaWorks';
import ThirdScreen from './screens/ThirdScreen';
import TableOfContents from '../components/Hishtalmut/Hishtalmut';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
import ByMe from '../components/ByMeH/ByMe';



const HishtalmutPageWrapper = () => {
   
    return <>
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