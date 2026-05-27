import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const CoursePageWrapper = lazy(() => import('./CoursePage/CoursePageWrapper'));
const HishtalmutPageWrapper = lazy(() => import('./HishtalmutPage/HishtalmutPageWrapper'));

function App() {
  return <>
   <Router>
    <Suspense fallback={<div />}>
    <Routes>

    <Route path="/" index element={<CoursePageWrapper/>}/>
    <Route path="/hishtalmut" index element={<HishtalmutPageWrapper/>}/>
 </Routes>
    </Suspense>
 </Router>
  </>
}

export default App;
