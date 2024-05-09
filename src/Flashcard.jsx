import React, { useState, useId } from 'react'

export default function Flashcard({ cardTitle, problem, solution, current, answer }) {
    const [side, setSide] = useState(current);
    return (
        <div className="flashcard" onClick={() => setSide(1 - side)}>
            <div className={"card-front" + (side == 0 ? "" : " not-picked")}>
                <h3 className="flashcard-title">{cardTitle}</h3>
                {problem}
                <p className={"answer-alert"}>Click to see answer</p>
            </div>
            <div className={"card-back" + (side == 1 ? "" : " not-picked")}>
                <h3 className="flashcard-title">Sagot</h3>
                {solution}
                {answer != null ? <p>Samakatuwid, ang sagot ay {answer}.</p> : null}
                <p className={"answer-alert"}>Click to see problem</p>
            </div>
        </div>
    )
}
