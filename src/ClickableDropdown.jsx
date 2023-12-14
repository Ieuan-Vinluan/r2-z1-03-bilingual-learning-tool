import React from 'react'

export default function ClickableDropdown(props) {
    return (
        <div className="clickable-dropdown">
          <div className="clickable-dropdown-header-container">
            <h2 className="clickable-dropdown-header">{props.headerText}</h2>
            <div className="arrow-right" onClick={() => props.setCurScreen('lesson1')}></div>
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
