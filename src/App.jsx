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
      document.title = "Homepage";
      return (<HomeScreen setCurScreen={setCurScreen}/>);
    } else if (curScreen == 'lesson1') {
      document.title = "Lesson 1";
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
      document.title = "Lesson 2";
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum fugiat laborum perspiciatis consequatur. Facilis quaerat distinctio placeat! Velit tempore laboriosam maxime sed iure tempora voluptatibus molestiae corporis esse nam.</p>
          <div className="lesson-two-equation-one">
            <Latex>
              {"$x = x_0 + v_0t + \\frac{1}{2} at^2$"}
            </Latex>
          </div>
        </LessonPage>
      );
    } else {
      document.title = "Lesson 3";
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur quas neque maiores eligendi soluta culpa. Consequatur incidunt quidem voluptatum.</p>
          <Latex>
            {"$A_x = Acos\\theta, A_y = Asin\\theta$"}
          </Latex>
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
