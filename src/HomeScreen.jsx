import React from "react";
import ClickableDropdown from "./ClickableDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBasketball,
	faGauge,
	faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeScreen({ setCurScreen }) {
	return (
		<>
			<div className="page-header">
				<div className="header-text">
					<h1>An Introduction to Kinematics</h1>
					<p>The geometry of motion, kinematics is seen in our everyday life.</p>
				</div>
				<img src="/media/basketball.png" alt="" />
			</div>
			<main className="main-home-page">
				<h1 className="homepage-subtitle">
					Some lessons to get you started!
				</h1>
				<div className="content-container">
					<ClickableDropdown
						headerText="Kinematic Equations"
						id="lesson1"
						setCurScreen={setCurScreen}
						description=""
						icon={<FontAwesomeIcon icon={faGauge} size="2x" />}
					></ClickableDropdown>
					{/* <ClickableDropdown headerText="Motion Graphs" id='lesson2' setCurScreen={setCurScreen} description="" icon={<FontAwesomeIcon icon={faArrowsSpin} size="2x" />}>
              </ClickableDropdown> */}
					<ClickableDropdown
						headerText="Free Fall"
						id="lesson3"
						setCurScreen={setCurScreen}
						description=""
						icon={<FontAwesomeIcon icon={faBasketball} size="2x" />}
					></ClickableDropdown>
				</div>
			</main>
		</>
	);
}
