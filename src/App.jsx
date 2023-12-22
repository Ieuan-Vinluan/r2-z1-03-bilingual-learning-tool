import React, { useState } from 'react';
import './css/App.css';
import HomeScreen from './HomeScreen';
import LessonPage from './LessonPage';
import StandardHeader from './StandardHeader';

function App() {
  const [curScreen, setCurScreen] = useState('home');

  function goTo() {
    if (curScreen == 'home') {
      return (<HomeScreen setCurScreen={setCurScreen}/>);
    } else if (curScreen == 'lesson1') {
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 1</h1>
          { /* lesson content here */ }
        </LessonPage>
      );
    } else if (curScreen == 'lesson2') {
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 2</h1>
          { /* lesson content here */ }
        </LessonPage>
      );
    } else {
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 3</h1>
          { /* lesson content here */ }
        </LessonPage>
      );
    }
  }

  return (
    <>
      <StandardHeader setCurScreen={setCurScreen}/>
      {goTo()}
      { /* footer here */ }
    </>
  );
}



export default App
