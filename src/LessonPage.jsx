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
	let navigationBtns = (<div className={"prev-next" + (currentSections[props.id] === 0 ? " prev-next-one" : "")}>
		<button disabled={currentSections[props.id] === 0} className={currentSections[props.id] === 0 ? "hide" : ""} type="button" onClick={() => {
			let newId = currentSections[props.id] - 1;
			setCurrentLessonSection(newId);
			currentSections[props.id] = newId;
			window.scrollTo(0, 0);
		}}>&laquo; Previous</button>
		<button disabled={(currentSections[props.id] + 1 >= lessons.length || canGoNext())} className={currentSections[props.id] + 1 >= lessons.length ? "hide" : ""} type="button" onClick={() => {
			let newId = currentSections[props.id] + 1;
			setCurrentLessonSection(newId);
			currentSections[props.id] = newId;
			window.scrollTo(0, 0);
		}}>Next &raquo;</button>
	</div>);
	let currentLessonChildren = lessons[currentSections[props.id]].props.children;
	let newLessonChildren = [
		...currentLessonChildren.slice(0, 2),
		navigationBtns,
		...currentLessonChildren.slice(2)
	]
	console.log(newLessonChildren)
	return (
		<>
			<main className="main-lesson-page">
				{newLessonChildren}
				{props.nonLessonPages.includes(currentSections[props.id]) || currentSections[props.id] === lessons.length - 1 ? null : navigationBtns}
			</main>
		</>
	);
}
