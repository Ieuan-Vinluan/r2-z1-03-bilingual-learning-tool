import React from 'react'

export default function DropdownMenu(props) {
    return (
      <div className="dropdown">
        {props.children}
      </div>
    );
}
