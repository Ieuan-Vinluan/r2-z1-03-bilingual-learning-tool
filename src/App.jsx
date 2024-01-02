import React, { useState } from 'react';
import './css/App.css';
import HomeScreen from './HomeScreen';
import LessonPage from './LessonPage';
import StandardHeader from './StandardHeader';
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

function App() {
  const [curScreen, setCurScreen] = useState('home');
  function goTo() {
    if (curScreen == 'home') {
      return (<HomeScreen setCurScreen={setCurScreen}/>);
    } else if (curScreen == 'lesson1') {
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel accusamus vitae omnis, ducimus iure voluptatum laborum reiciendis exercitationem eligendi! Suscipit culpa soluta cupiditate nesciunt quibusdam neque adipisci eveniet voluptates!</p>
          <div className="lesson-one-equation-one"> { /* testing equation */ }
            <Latex>
              $\Delta x = x - x_0$
            </Latex>
          </div>
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
