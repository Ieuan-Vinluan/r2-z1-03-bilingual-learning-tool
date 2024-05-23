import React from "react";
import NavItem from "./NavItem";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faBasketball,
	faGauge,
} from "@fortawesome/free-solid-svg-icons";

export default function StandardHeader({ curScreen, setCurScreen }) {
	return (
		<header>
			<Navbar>
				<NavItem
					text="Homepage"
					selected={curScreen == "home"}
					id="home"
					setCurScreen={setCurScreen}
					icon={<FontAwesomeIcon icon={faHome} size="2x" />}
				>
				</NavItem>
				<NavItem
					text="Kinematic Equations"
					selected={curScreen == "lesson1"}
					id="lesson1"
					setCurScreen={setCurScreen}
					icon={<FontAwesomeIcon icon={faGauge} size="2x" />}
				>
				</NavItem>
				<NavItem
					text="Free Fall"
					selected={curScreen == "lesson3"}
					id="lesson3"
					setCurScreen={setCurScreen}
					icon={<FontAwesomeIcon icon={faBasketball} size="2x" />}
				>
				</NavItem>
			</Navbar>
		</header>
	);
}
