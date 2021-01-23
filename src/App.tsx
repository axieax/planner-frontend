import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import PlanBox from './components/PlanBox';
import CourseBox from './components/CourseBox';

const themes = ['orange', 'purple', 'green', 'blue', 'sideways', 'dark'];
const themeStyle = (themeIndex: number) => ({
  backgroundImage: 'url(/backgrounds/' + themes[themeIndex] + '.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});


export default function App() {
  // change theme
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
