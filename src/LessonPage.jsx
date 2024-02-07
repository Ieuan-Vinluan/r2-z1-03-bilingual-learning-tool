import React, { useState } from "react";
import StandardHeader from "./StandardHeader";

{
	/* IDEA vertical navigation bar for content of lesson */
}

export default function LessonPage(props) {
	const [currentLessonSection, setCurrentLessonSection] = useState("0"); // first page
	let lessons = props.children;
  console.log(lessons);
  const handleClick = (event) => {
    console.log(event.target.id);
    setCurrentLessonSection(event.target.id);
  }
	return (
		<>
			<div className="lesson-dot-navigation">
				{lessons.map((lesson, idx) => {
					return <div id={idx} className="lesson-dot-navigation-dot" onClick={handleClick}>&nbsp;</div>;
				})}
			</div>
			<main className="main-lesson-page">{lessons[parseInt(currentLessonSection)]}</main>
		</>
	);
}
