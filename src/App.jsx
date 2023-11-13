import React, { useState } from 'react';
import './css/App.css';

function App() {
  return (
    <>
      <header>
        <Navbar>
          <NavItem text="Physical Quantities">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  <a href="#">Definitions</a>
                </p>
                <p>
                  <a href="#">Units</a>
                </p>
                <p>
                  <a href="#">Sample Problems</a>
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Kinematics">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  <a href="#">Equations</a>
                </p>
                <p>
                  <a href="">Sample Problems</a>
                </p>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Vectors">
            <DropdownMenu>
              <DropdownItem>
                <p>
                  <a href="#">Definition</a>
                </p>
                <p>
                  <a href="#">Vector Addition</a>
                </p>
                <p>
                  <a href="#">Sample Problems</a>
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
          <ClickableDropdown headerText="Physical Quantities" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsa, beatae ipsam odio exercitationem necessitatibus. Soluta, quia! Veniam, magni, incidunt, odit hic minima minus voluptatum assumenda quasi quae laboriosam fugit!">
            { /* clickable dropdown item here */ }
            <a href="#">Meowww</a>
          </ClickableDropdown>
        </div>
      </main>
    </>
  );
}

function ClickableDropdown(props) {
  return (
    <div className="clickable-dropdown">
      <h2 className="clickable-dropdown-header">{props.headerText}</h2>
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
      <a href="#" className="nav-item-text" onClick={() => setClicked(!clicked)}>
        { props.text }
      </a>
      {clicked && props.children}
    </li>
  );
}

function DropdownItem(props) {
  return (
    <a href="#" className="dropdown-menu-item">
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



export default App