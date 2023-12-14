import React from 'react'

export default function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          { props.children }
        </ul>
      </nav>
    );
}
