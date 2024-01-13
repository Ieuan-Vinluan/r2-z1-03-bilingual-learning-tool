import React from 'react'
import NavItem from './NavItem';
import Navbar from './Navbar';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

export default function StandardHeader({ setCurScreen }) {
    /* TODO only allow user to have one dropdown menu open */
    return (
      <header>
          <Navbar>
            <NavItem text="Home" setCurScreen={setCurScreen}>
              { /* TODO modify NavItem */}
            </NavItem>
            <NavItem text="Uniformly Accelerated Motion" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem setCurScreen={setCurScreen} id="lesson1">
                  <p>
                    Definitions
                  </p>
                  <p>
                    Equations
                  </p>
                  <p>
                    Sample Problems
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem text="Free Fall" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem setCurScreen={setCurScreen} id="lesson2">
                  <p>
                    Definitions
                  </p>
                  <p>
                    Derivations and Equations
                  </p>
                  <p>
                    Sample Problems
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem text="Uniform Circular Motion" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem setCurScreen={setCurScreen} id="lesson3">
                  <p>
                    Introduction
                  </p>
                  <p>
                    Equations
                  </p>
                  <p>
                    Sample Problems
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
          </Navbar>
        </header>
    );
}
