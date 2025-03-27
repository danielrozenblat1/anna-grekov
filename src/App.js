import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePageWrapper from './CoursePage/CoursePageWrapper';
import HishtalmutPageWrapper from './HishtalmutPage/HishtalmutPageWrapper';

function App() {
  return <>
   <Router>
    <Routes>
   
    <Route path="/" index element={<CoursePageWrapper/>}/>
    <Route path="/hishtalmut" index element={<HishtalmutPageWrapper/>}/>
 </Routes>
 </Router>
  </>
}

export default App;
