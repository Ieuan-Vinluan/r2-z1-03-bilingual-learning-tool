import React from 'react'

export default function ClickableDropdown(props) {
  return (props.description == "") ? noDescription(props) : hasDescription(props);
}

function noDescription(props) {
  return (
    <div className="clickable-dropdown">
      <div className="clickable-dropdown-header-container">
        {props.icon != null && props.icon}
        <a href="#" className="clickable-dropdown-header" onClick={() => props.setCurScreen(props.id)}>{props.headerText}</a>
        <div className="arrow-right" onClick={() => props.setCurScreen(props.id)}></div>
      </div>
    </div>
  );
}

function hasDescription(props) {
  return (
    <div className="clickable-dropdown">
      <div className="clickable-dropdown-header-container">
        <a className="clickable-dropdown-header">{props.headerText}</a>
        <div className="arrow-right" onClick={() => props.setCurScreen(props.id)}></div>
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
