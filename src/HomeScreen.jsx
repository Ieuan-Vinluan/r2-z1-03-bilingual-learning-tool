import React from 'react'
import StandardHeader from './StandardHeader';
import ClickableDropdown from './ClickableDropdown';

export default function HomeScreen({ setCurScreen }) {
    return (
        <>
          <main>
            <h1>
              Fundamental Physics
            </h1>
            <div className="content-container">
              <ClickableDropdown headerText="Physical Quantities" setCurScreen={setCurScreen} description="Physical quantities refer to properties of an entity that can be represented by a quantitative measurement. This course will tackle the many different kinds of physical quantities, their units of measurement, and many more.">
              </ClickableDropdown>
              <ClickableDropdown headerText="Basic Kinematics" setCurScreen={setCurScreen} description="Kinematics is the study of motion. The many physical quantities associated with motion and the many formulas that relate these physical quantities with one another will be discussed.  ">
              </ClickableDropdown>
              <ClickableDropdown headerText="Vectors" setCurScreen={setCurScreen} description="A vector is a physical quantity with magnitude and direction. Basic operations associated with vectors, such as adding vectors or taking the cross or dot product of vectors, will be tackled.">
              </ClickableDropdown>
            </div>
          </main>
        </>
    );
}
