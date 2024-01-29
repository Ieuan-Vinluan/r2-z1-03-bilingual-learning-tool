import React, { useState, useEffect } from 'react'

export default function NavItem(props) {
  const [clicked, setClicked] = useState(false);
  const [renderText, setRenderText] = useState(false);

  useEffect(() => {
    setRenderText(window.innerWidth > 800);
  });

  return (
    <li className={"nav-item" + (props.selected ? " is-selected" : "")} onClick={() => {
      if (props.text == "Homepage") {
        props.setCurScreen('home');
      }
    }}>
      <a className="nav-item-text" onClick={() => {
        setClicked(!clicked);
        if (!renderText) {
          console.log("switching!");
          props.setCurScreen(props.id);
        }
      }}>
        {props.icon}
        {renderText && <p>{props.text}</p>}
      </a>
      {clicked && renderText && props.children}
    </li>
  );
}