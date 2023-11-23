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
          </ClickableDropdown>
          <ClickableDropdown headerText="Kinematics" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sapiente similique, neque deserunt iste, quis voluptate sint cupiditate esse eos, nobis expedita ullam recusandae itaque ea aliquid modi. Rerum, necessitatibus?">
            { /* items here */ }
          </ClickableDropdown>
          <ClickableDropdown headerText="Vectors" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus id mollitia odio est quod tempore assumenda tenetur veritatis recusandae dolorem. Ab quasi magni illo eum quibusdam excepturi facere, praesentium unde sint, porro inventore eveniet deserunt saepe laboriosam est doloremque fugiat aut perferendis suscipit! Aut dignissimos commodi aliquam libero rem veniam culpa necessitatibus quisquam nostrum non, asperiores inventore nam ea eum quaerat. Facilis earum rem rerum, pariatur iure adipisci modi recusandae.">
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
        <a href="#">--&gt;</a>
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