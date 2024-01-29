import React, { useState } from 'react';
import './css/App.css';
import HomeScreen from './HomeScreen';
import LessonPage from './LessonPage';
import StandardHeader from './StandardHeader';
import StandardFooter from './StandardFooter';
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

function App() {
  const [curScreen, setCurScreen] = useState('home');
  function goTo() {
    if (curScreen == 'home') {
      document.title = "Homepage";
      return (<HomeScreen setCurScreen={setCurScreen} />);
    } else if (curScreen == 'lesson1') {
      document.title = "Lesson 1";
      return (
        <LessonPage setCurScreen={setCurScreen}>
          <h1>Lesson 1: Uniformly Accelerated Motion</h1>
          <h2>Pagpapakilala</h2>
          <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UWMBj-uD37Y?si=sY2E-kF_TCoN-7Nr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p>Panoorin mo ang nahuhulog na dahon. Naisip mo na ba dati kung bakit ito nangyayari? Sino ang nagsabing dapat mahulog ang dahon nang ganyan?</p><br />
          <p>Subukan mo naman ito: paglaruan ang mga slider sa simulation para pagalawin ang tao!</p>
          <div className="iframe-container">
            <iframe width="800" height="600" src="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man" frameborder="0"></iframe>
          </div>
          <p>Ngayon, ang aking tanong: ano ang iyong ginawa para pagalawin siya? Paano mo siya napabilis? Ano ang iyong mga naobserbahan? Ano ang epekto ng "position," "velocity," at "acceleration" sa kanyang paggalaw? Teka, ano nga ba ang position, velocity, at acceleration?</p><br />
          <div className="lesson-one-equation-one"> { /* testing equation */}
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
      <StandardHeader curScreen={curScreen} setCurScreen={setCurScreen} />
      {goTo()}
      {/* <StandardFooter /> */}
    </>
  );
}



export default App
