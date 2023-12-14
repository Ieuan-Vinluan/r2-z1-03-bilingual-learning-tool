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
      return (<LessonPage setCurScreen={setCurScreen}/>);
    } else if (curScreen == 'lesson2') {
      return (<LessonPage setCurScreen={setCurScreen}/>);
    } else {
      return (<LessonPage setCurScreen={setCurScreen}/>);
    }
  }

  return (
    <>
      <StandardHeader setCurScreen={setCurScreen}/>
      {goTo()}
    </>
  );
}



export default App
