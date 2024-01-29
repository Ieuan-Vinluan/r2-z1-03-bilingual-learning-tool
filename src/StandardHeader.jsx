import React from 'react'
import NavItem from './NavItem';
import Navbar from './Navbar';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBasketball, faGauge, faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

export default function StandardHeader({ curScreen, setCurScreen }) {
    /* TODO only allow user to have one dropdown menu open */
    /* TODO add icons to navbar */
    return (
      <header>
          <Navbar>
            <NavItem text="Homepage" selected={curScreen == 'home'} id='home' setCurScreen={setCurScreen} icon={<FontAwesomeIcon icon={faHome} size="2x" />}>
              { /* TODO modify NavItem */}
            </NavItem>
            <NavItem text="Uniformly Accelerated" selected={curScreen == 'lesson1'} id='lesson1' setCurScreen={setCurScreen} icon={<FontAwesomeIcon icon={faGauge} size="2x" />}>
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
            <NavItem text="Uniform Circular" selected={curScreen == 'lesson2'} id='lesson2'  setCurScreen={setCurScreen} icon={<FontAwesomeIcon icon={faArrowsSpin} size="2x" />}>
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
            <NavItem text="Projectile" selected={curScreen == 'lesson3'} id='lesson3'  setCurScreen={setCurScreen} icon={<FontAwesomeIcon icon={faBasketball} size="2x" />}>
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
