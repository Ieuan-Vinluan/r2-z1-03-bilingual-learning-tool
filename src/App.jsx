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

      </main>
    </>
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