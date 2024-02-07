import React, { useState } from "react";

export default function Checkbox({ taskDone, task, name, finishedTasks }) {
	const [checked, setChecked] = useState(finishedTasks[task]);
	const handleChange = () => {
		console.log(checked);
		setChecked(!checked);
		finishedTasks[task] = checked;
		taskDone(task);
	};
	return (
		<input
			type="checkbox"
			name={name}
			onChange={handleChange}
			checked={checked}
		></input>
	);
}
