import React, { useState, useEffect } from "react";
import StandardHeader from "./StandardHeader";

export default function LessonPage(props) {
	const [currentSections, setCurrentSections] = useState([0, 0]);
	const [currentLessonSection, setCurrentLessonSection] = useState(currentSections[props.id]); // first page
	const canGoNext = () => {
		if (props.needContinue) {
			return (props.needContinue && !props.canProceed) && currentSections[props.id] >= props.lastScreen;
		} else {
			return 0;
		}
	}
	useEffect(() => {
		setCurrentLessonSection(currentSections[props.id]);
	}, [props.id]);
	let chl = props.children;
	let lessons = [];
	for (let i = 0; i < chl.length; i++) {
		if (chl[i] != null) {
			lessons.push(chl[i]);
		}
	}
	const handleClick = (event) => {
		console.log(event.target.id);
		setCurrentLessonSection(event.target.id);
		currentSections[props.id] = parseInt(event.target.id);
		console.log(currentSections)
	};
	let ok = 0;
	console.log(lessons[currentSections[props.id]])
	console.log(currentSections)
	let currentLessonChildren = lessons[currentSections[props.id]].props.children;
	let newLessonChildren = [
		...currentLessonChildren.slice(0, 2),
		(<div className="prev-next">
			<button disabled={currentSections[props.id] === 0} type="button" onClick={() => {
				let newId = currentSections[props.id] - 1;
				setCurrentLessonSection(newId);
				currentSections[props.id] = newId;
				window.scrollTo(0, 0);
			}}>&laquo; Previous</button>
			<button disabled={(currentSections[props.id] + 1 >= lessons.length || canGoNext())} type="button" onClick={() => {
				let newId = currentSections[props.id] + 1;
				setCurrentLessonSection(newId);
				currentSections[props.id] = newId;
				window.scrollTo(0, 0);
			}}>Next &raquo;</button>
		</div>),
		...currentLessonChildren.slice(2)
	]
	console.log(newLessonChildren)
	return (
		<>
			<main className="main-lesson-page">
				{newLessonChildren}
			</main>
		</>
	);
}
