import React from 'react'

export default function DropdownItem(props) {
    return (
      <a className="dropdown-menu-item">
        { props.children }
      </a>
    );
}
