import React from 'react';
import './App.scss';

import Header from './components/Header';
import PlanBox from './components/PlanBox';
import CourseBox from './components/CourseBox';

const BackgroundStyle = {
  backgroundImage: 'url(/light-background.jpeg)', // change to custom 1920px
  backgroundSize: 'cover',
  // borderStyle: 'solid',
}

function App() {
  return (
    <div className="App" style={BackgroundStyle}>
      <div className="window">
        <Header/>
        <div className='interface'>
          <PlanBox/>
          <CourseBox/>
        </div>
      </div>
    </div>
  );
}

export default App;

// NOTE: App background doesn't cover entire screen, sidebar still present
