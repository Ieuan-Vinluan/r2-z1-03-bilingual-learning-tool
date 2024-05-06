import React, { useState, useEffect } from "react";
import StandardHeader from "./StandardHeader";

{
	/* IDEA vertical navigation bar for content of lesson */
}

export default function LessonPage(props) {
	const [currentSections, setCurrentSections] = useState([0, 0]);
	const [currentLessonSection, setCurrentLessonSection] = useState(currentSections[props.id]); // first page

	useEffect(() => {
		// console.log("FROM USE EFFECT, PROPS.ID = " + props.id);
		setCurrentLessonSection(currentSections[props.id]);
	}, [props.id]);

	// console.log("CURRENT ID: " + props.id);
	// console.log("CURRENT SECTION: " + currentLessonSection);
	// console.log("SUPPOSED TO BE: " + currentSections[props.id]);
	// let lessons = props.children;
	let chl = props.children;
	let lessons = [];
	for (let i = 0; i < chl.length; i++) {
		if (chl[i] != null) {
			lessons.push(chl[i]);
		}
	}
	// console.log(lessons);
	// console.log("current id " + currentSections[props.id]);
	const handleClick = (event) => {
		console.log(event.target.id);
		setCurrentLessonSection(event.target.id);
		currentSections[props.id] = parseInt(event.target.id);
		console.log(currentSections)
	};
	let ok = 0;
	// console.log(currentSections)
	return (
		<>
			{/* <div className="lesson-dot-navigation">
				{lessons.map((lesson, idx) => {
					ok |= idx == currentSections[props.id];
					return (
						<div
							id={idx}
							className={"lesson-dot-navigation-dot" + (ok ? "" : " part-of-bar") + (idx == currentSections[props.id] ? " current-lesson" : "")}
							onClick={handleClick}
						>
							&nbsp;
						</div>
					);
				})}
			</div> */}
			<main className="main-lesson-page">
				{lessons[currentSections[props.id]]}
			</main>
			<div className="prev-next">
				<button disabled={currentSections[props.id] === 0} type="button" onClick={() => {
					let newId = currentSections[props.id] - 1;
					setCurrentLessonSection(newId);
					currentSections[props.id] = newId;
					window.scrollTo(0, 0);
				}}>&laquo; Previous</button>
				<button disabled={currentSections[props.id] + 1 >= lessons.length} type="button" onClick={() => {
					let newId = currentSections[props.id] + 1;
					setCurrentLessonSection(newId);
					currentSections[props.id] = newId;
					window.scrollTo(0, 0);
				}}>Next &raquo;</button>
			</div>
		</>
	);
}
