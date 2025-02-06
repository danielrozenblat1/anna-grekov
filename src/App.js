import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';

import Syllabus from './components/Sillabus/Sillabus';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
    <FirstScreen/>
    <SecondScreen/>
    <AboutMe/>
  <Syllabus/>
<ForthScreen/>
<ByMe/>
  </>
}

export default App;
