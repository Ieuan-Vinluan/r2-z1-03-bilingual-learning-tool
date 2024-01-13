import React from 'react'
import ClickableDropdown from './ClickableDropdown';

export default function HomeScreen({ setCurScreen }) {
    return (
        <>
          <main>
            <h1>
              Kinematics
            </h1>
            <div className="content-container">
              <ClickableDropdown headerText="Uniformly Accelerated Motion" id='lesson1' setCurScreen={setCurScreen} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt eveniet tempore aspernatur quidem ea aliquam iste deserunt sed ut minima voluptates vero deleniti veritatis, quam dolore molestias sit quisquam.">
              </ClickableDropdown>
              <ClickableDropdown headerText="Free Fall" id='lesson2' setCurScreen={setCurScreen} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda maiores mollitia, expedita dolorum, iure necessitatibus ipsam architecto nostrum nobis, neque commodi a ab eveniet repellendus rerum vel. Doloribus dolores molestias earum libero maiores alias laudantium repellendus atque placeat vitae?">
              </ClickableDropdown>
              <ClickableDropdown headerText="Uniform Circular Motion" id='lesson3' setCurScreen={setCurScreen} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet fugit corrupti beatae odio ipsum natus aliquam illum unde laudantium.">
              </ClickableDropdown>
            </div>
          </main>
        </>
    );
}
