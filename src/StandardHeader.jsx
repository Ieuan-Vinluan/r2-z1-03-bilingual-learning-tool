import React from 'react'
import NavItem from './NavItem';
import Navbar from './Navbar';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

export default function StandardHeader({ setCurScreen }) {
    return (
      <header>
          <Navbar>
            <NavItem text="Home" setCurScreen={setCurScreen}>
              { /* TODO modify NavItem */}
            </NavItem>
            <NavItem text="Physical Quantities" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem>
                  <p>
                    Definitions
                  </p>
                  <p>
                    Units
                  </p>
                  <p>
                    Sample Problems
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem text="Kinematics" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem>
                  <p>
                    Equations
                  </p>
                  <p>
                    Sample Problems
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem text="Vectors" setCurScreen={setCurScreen}>
              <DropdownMenu>
                <DropdownItem>
                  <p>
                    Definition
                  </p>
                  <p>
                    Vector Addition
                  </p>
                  <p>
                    Cross and Dot Product
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
