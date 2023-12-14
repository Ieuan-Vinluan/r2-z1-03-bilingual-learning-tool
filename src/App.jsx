import React, { useState } from 'react';
import './css/App.css';
import HomeScreen from './HomeScreen';
import LessonPage from './LessonPage';
import StandardHeader from './StandardHeader';

function App() {
  const [curScreen, setCurScreen] = useState('homepage');

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
  // var [onLesson, setOnLesson] = useState(0);
  // if (!onLesson) {
  //   console.log("at home");
  //   return (
  //     <>
  //       <StandardHeader />
  //       <main>
  //         <h1>
  //           Fundamental Physics
  //         </h1>
  //         <div className="content-container">
  //           <ClickableDropdown headerText="Physical Quantities" setOnLesson={setOnLesson} description="Physical quantities refer to properties of an entity that can be represented by a quantitative measurement. This course will tackle the many different kinds of physical quantities, their units of measurement, and many more.">
  //           </ClickableDropdown>
  //           <ClickableDropdown headerText="Basic Kinematics" setOnLesson={setOnLesson} description="Kinematics is the study of motion. The many physical quantities associated with motion and the many formulas that relate these physical quantities with one another will be discussed.  ">
  //           </ClickableDropdown>
  //           <ClickableDropdown headerText="Vectors" setOnLesson={setOnLesson} description="A vector is a physical quantity with magnitude and direction. Basic operations associated with vectors, such as adding vectors or taking the cross or dot product of vectors, will be tackled.">
  //           </ClickableDropdown>
  //         </div>
  //       </main>
  //     </>
  //   );
  // } else {
  //   console.log("currently on lesson");
  //   return (
  //     <>
  //       <LessonPage>
  //         <h1></h1>
  //       </LessonPage>
  //     </>
  //   );
  // }

  // function StandardHeader() {
  //   return (
  //     <header>
  //         <Navbar>
  //           <NavItem text="Home" setOnLesson={setOnLesson}>
  //             { /* TODO modify NavItem */}
  //           </NavItem>
  //           <NavItem text="Physical Quantities" setOnLesson={setOnLesson}>
  //             <DropdownMenu>
  //               <DropdownItem>
  //                 <p>
  //                   Definitions
  //                 </p>
  //                 <p>
  //                   Units
  //                 </p>
  //                 <p>
  //                   Sample Problems
  //                 </p>
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </NavItem>
  //           <NavItem text="Kinematics" setOnLesson={setOnLesson}>
  //             <DropdownMenu>
  //               <DropdownItem>
  //                 <p>
  //                   Equations
  //                 </p>
  //                 <p>
  //                   Sample Problems
  //                 </p>
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </NavItem>
  //           <NavItem text="Vectors" setOnLesson={setOnLesson}>
  //             <DropdownMenu>
  //               <DropdownItem>
  //                 <p>
  //                   Definition
  //                 </p>
  //                 <p>
  //                   Vector Addition
  //                 </p>
  //                 <p>
  //                   Cross and Dot Product
  //                 </p>
  //                 <p>
  //                   Sample Problems
  //                 </p>
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </NavItem>
  //         </Navbar>
  //       </header>
  //   );
  // }

  // function ClickableDropdown(props) {
  //   return (
  //     <div className="clickable-dropdown">
  //       <div className="clickable-dropdown-header-container">
  //         <h2 className="clickable-dropdown-header">{props.headerText}</h2>
  //         <div className="arrow-right" onClick={() => setOnLesson(1)}></div>
  //       </div>
  //       <div className="clickable-dropdown-body">
  //         <p className="clickable-dropdown-description">
  //           {props.description}
  //         </p>
  //         <div className="clickable-dropdown-items">
  //           {props.children}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  // function Navbar(props) {
  //   return (
  //     <nav className="navbar">
  //       <ul className="navbar-list">
  //         { props.children }
  //       </ul>
  //     </nav>
  //   );
  // }
  
  // function NavItem(props) {
  //   const [clicked, setClicked] = useState(false);
  //   return (
  //     <li className="nav-item" onClick={() => {
  //       if (props.text == "Home") {
  //         setOnLesson(0);
  //       }
  //     }}>
  //       <a className="nav-item-text" onClick={() => setClicked(!clicked)}>
  //         { props.text }
  //       </a>
  //       {clicked && props.children}
  //     </li>
  //   );
  // }
  
  // function DropdownItem(props) {
  //   return (
  //     <a className="dropdown-menu-item">
  //       { props.children }
  //     </a>
  //   );
  // }
  
  // function DropdownMenu(props) {
  //   return (
  //     <div className="dropdown">
  //       {props.children}
  //     </div>
  //   );
  // }
  
  // function LessonPage(props) {
  //   return (
  //     <>
  //       <StandardHeader />
  //       <main>
  //         { props.children }
  //       </main>
  //     </>
  //   );
  // }
}



export default App
