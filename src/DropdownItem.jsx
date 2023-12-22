import React from 'react'

export default function DropdownItem(props) {
    return (
      <a className="dropdown-menu-item" onClick={() => props.setCurScreen(props.id)}>
        { props.children }
      </a>
    );
}
