import React, { useState, useId } from 'react'

export default function PracticeProblem({ challengeProb, cardTitle, problem, solution, current, answer }) {
    const [side, setSide] = useState(current);
    return (
        <div className={"prac-problems" + (answer != null ? "" : " no-back-side")} onClick={() => {
            if (answer != null) setSide(1 - side);
        }
        }>
            <div className={"prac-problems-front" + (side == 0 ? "" : " not-picked")}>
                <h3 className="card-title">{cardTitle}</h3>
                <div className="problem-statement">
                    {problem}
                </div>
                {answer ? <p className={"answer-alert"}>Click to see answer</p> : null}
            </div>
            <div className={"prac-problems-back" + (side == 1 ? "" : " not-picked")}>
                <h3 className="card-title">Sagot</h3>
                {solution}
                {answer != null ? <p>Ang sagot ay {answer}.</p> : null}
                {/* <p className={"answer-alert"}>Click to see problem</p> */}
            </div>
        </div>
    )
}
