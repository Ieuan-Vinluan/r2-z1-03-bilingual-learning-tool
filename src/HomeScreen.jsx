import React from 'react'
import ClickableDropdown from './ClickableDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball, faGauge, faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen({ setCurScreen }) {
    return (
        <>
          <div className="page-header">
            <h1>
              An Introduction to Kinematics
            </h1>
          </div>
          <main className="main-home-page">
            <h1 className="homepage-subtitle">Some lessons to get you started!</h1>
            <div className="content-container">
              <ClickableDropdown headerText="Uniformly Accelerated Motion" id='lesson1' setCurScreen={setCurScreen} description="" icon={<FontAwesomeIcon icon={faGauge} size="2x" />}>
              </ClickableDropdown>
              <ClickableDropdown headerText="Uniform Circular Motion" id='lesson2' setCurScreen={setCurScreen} description="" icon={<FontAwesomeIcon icon={faArrowsSpin} size="2x" />}>
              </ClickableDropdown>
              <ClickableDropdown headerText="Projectile Motion" id='lesson3' setCurScreen={setCurScreen} description="" icon={<FontAwesomeIcon icon={faBasketball} size="2x" />}>
              </ClickableDropdown>
            </div>
          </main>
        </>
    );
}
