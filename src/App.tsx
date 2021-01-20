import React from 'react';
import './App.scss';

import Header from './components/Header';
import PlanBox from './components/PlanBox';
import CourseBox from './components/CourseBox';
import SelectBox from './components/SelectBox';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='interface'>
        <PlanBox/>
        <div className="right-container">
          <CourseBox/>
          <SelectBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
