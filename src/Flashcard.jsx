import React, { useState, useId } from 'react'

export default function Flashcard({ cardTitle, problem, solution, current, answer }) {
    const [side, setSide] = useState(current);
    return (
        <div className="flashcard" onMouseEnter={() => setSide(1)} onMouseLeave={() => setSide(0)}>
            <div className={"card-front" + (side == 0 ? "" : " not-picked")}>
                <h3>{cardTitle}</h3>
                {problem}
            </div>
            <div className={"card-back" + (side == 1 ? "" : " not-picked")}>
                <h3>Sagot</h3>
                {solution}
                <p>Samakatuwid, ang sagot ay {answer}.</p>
            </div>
        </div>
    )
}
