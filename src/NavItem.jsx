import React, { useState } from 'react'

export default function NavItem(props) {
    const [clicked, setClicked] = useState(false);
    return (
      <li className="nav-item" onClick={() => {
        if (props.text == "Home") {
          props.setCurScreen('home');
        }
      }}>
        <a className="nav-item-text" onClick={() => {
          setClicked(!clicked);
        }}>
          { props.text }
        </a>
        {clicked && props.children}
      </li>
    );
}