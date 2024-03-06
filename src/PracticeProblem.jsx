import React, { useState, useId } from 'react'

export default function PracticeProblem({ cardTitle, problem, solution, current, answer }) {
    const [side, setSide] = useState(current);
    return (
        <div className={"prac-problems" + (answer != null ? "" : " no-back-side")} onClick={() => {
            if (answer != null) setSide(1 - side);
        }
        }>
            <div className={"prac-problems-front" + (side == 0 ? "" : " not-picked")}>
                <h3>{cardTitle}</h3>
                {problem}
                {/* <p className={"answer-alert"}>Click to see answer</p> */}
            </div>
            <div className={"prac-problems-back" + (side == 1 ? "" : " not-picked")}>
                <h3>Sagot</h3>
                {solution}
                {answer != null ? <p>Ang sagot ay {answer}.</p> : null}
                {/* <p className={"answer-alert"}>Click to see problem</p> */}
            </div>
        </div>
    )
}
