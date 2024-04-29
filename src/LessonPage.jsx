import React, { useState } from "react";
import StandardHeader from "./StandardHeader";

{
	/* IDEA vertical navigation bar for content of lesson */
}

export default function LessonPage(props) {
	const [currentLessonSection, setCurrentLessonSection] = useState("0"); // first page
	const [currentSections, setCurrentSections] = useState([0, 0]);
	// let lessons = props.children;
	let chl = props.children;
	let lessons = [];
	for (let i = 0; i < chl.length; i++) {
		if (chl[i] != null) {
			lessons.push(chl[i]);
		}
	}
	console.log(lessons);
	console.log("current id " + currentSections[props.id]);
	const handleClick = (event) => {
		console.log(event.target.id);
		setCurrentLessonSection(event.target.id);
		currentSections[props.id] = parseInt(event.target.id);
		console.log(currentSections)
	};
	let ok = 0;
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
				<button disabled={parseInt(currentLessonSection) === 0} type="button" onClick={() => {
					let newId = parseInt(currentLessonSection) - 1;
					setCurrentLessonSection(newId);
					currentSections[props.id] = newId;
				}}>&laquo; Previous</button>
				<button disabled={parseInt(currentLessonSection) + 1 >= lessons.length} type="button" onClick={() => {
					let newId = parseInt(currentLessonSection) + 1;
					setCurrentLessonSection(newId);
					currentSections[props.id] = newId;
				}}>Next &raquo;</button>
			</div>
		</>
	);
}
