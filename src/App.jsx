import React, { useState } from 'react';
import './css/App.css';

function App() {
  return (
    <>
      <header>
        <Navbar>
          <NavItem text="Home">
            { /* TODO modify NavItem */}
          </NavItem>
          <NavItem text="Physical Quantities">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Definitions
                </p>
                <p>
                  Units
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Kinematics">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Equations
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Vectors">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Definition
                </p>
                <p>
                  Vector Addition
                </p>
                <p>
                  Cross and Dot Product
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Navbar>
      </header>
      <main>
        <h1>
          Fundamental Physics
        </h1>
        <div className="content-container">
          <ClickableDropdown headerText="Physical Quantities" description="Physical quantities refer to properties of an entity that can be represented by a quantitative measurement. This course will tackle the many different kinds of physical quantities, their units of measurement, and many more.">
            { /* clickable dropdown item here */ }
          </ClickableDropdown>
          <ClickableDropdown headerText="Basic Kinematics" description="Kinematics is the study of motion. The many physical quantities associated with motion and the many formulas that relate these physical quantities with one another will be discussed.  ">
            { /* items here */ }
          </ClickableDropdown>
          <ClickableDropdown headerText="Vectors" description="A vector is a physical quantity with magnitude and direction. Basic operations associated with vectors, such as adding vectors or taking the cross or dot product of vectors, will be tackled.">
            { /* items here */}
          </ClickableDropdown>
        </div>
      </main>
    </>
  );
}

function ClickableDropdown(props) {
  return (
    <div className="clickable-dropdown">
      <div className="clickable-dropdown-header-container">
        <h2 className="clickable-dropdown-header">{props.headerText}</h2>
        { /* TODO replace --&gt; with actual arrow image */}
        <div className="arrow-right"></div>
      </div>
      <div className="clickable-dropdown-body">
        <p className="clickable-dropdown-description">
          {props.description}
        </p>
        <div className="clickable-dropdown-items">
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        { props.children }
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <li className="nav-item">
      <a className="nav-item-text" onClick={() => setClicked(!clicked)}>
        { props.text }
      </a>
      {clicked && props.children}
    </li>
  );
}

function DropdownItem(props) {
  return (
    <a className="dropdown-menu-item">
      { props.children }
    </a>
  );
}

function DropdownMenu(props) {
  return (
    <div className="dropdown">
      {props.children}
    </div>
  );
}

function LessonPage(props) {
  const [isCurrentPage, setCurrentPage] = useState(false);
  return (
    {isCurrentPage} && <>
      <header>
        <Navbar>
          <NavItem text="Home">
          </NavItem>
          <NavItem text="Physical Quantities">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Definitions
                </p>
                <p>
                  Units
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Kinematics">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Equations
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Vectors">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  Definition
                </p>
                <p>
                  Vector Addition
                </p>
                <p>
                  Sample Problems
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Navbar>
      </header>
      <main>
        <p>Testing</p>
      </main>
    </>
  );
}

export default App