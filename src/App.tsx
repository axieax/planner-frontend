import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import PlanBox from './components/PlanBox';
import CourseBox from './components/CourseBox';

const themes = ['pink', 'purple', 'blue'];
const themeStyle = (themeIndex: number) => ({
  backgroundImage: 'url(/' + themes[themeIndex] + '.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});


function App() {
  const themes = ['pink', 'purple', 'blue'];
  const [themeIndex, setThemeIndex] = useState(0);
  
  const nextTheme = () => (setThemeIndex((themeIndex + 1) % themes.length));

  return (
    <div className="App" style={themeStyle(themeIndex)}>
      <div className="window">
        <Header nextTheme={nextTheme}/>
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
