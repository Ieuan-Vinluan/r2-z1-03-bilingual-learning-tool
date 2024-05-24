import React, { useState, useRef, useEffect } from 'react'

export default function PracticeProblem({ challengeProb, cardTitle, problem, solution, current, answer }) {
    const [side, setSide] = useState(current);
    useEffect(() => {
        setSide(0); // set to front page whenever problem is changed
    }, [problem])
    const ansRef = useRef(null);
    const problemRef = useRef(null);
    return (
        <div className={"prac-problems" + (answer != null ? "" : " no-back-side")} ref={problemRef} onClick={() => {
            if (answer != null) {
                setSide(1 - side);
                if (side == 1) {
                    problemRef.current.scrollIntoView();
                } else {
                    ansRef.current.scrollIntoView();
                }
            }
        }
        }>
            <div className={"prac-problems-front" + (side == 0 ? "" : " not-picked-prac")}>
                <h3 className="card-title">{cardTitle}</h3>
                <div className="problem-statement">
                    {problem}
                </div>
                {answer ? <p className={"answer-alert"}>{"Click to " + (side == 0 ? "see" : "hide") + " answer"}</p> : null}
            </div>
            <div className={"prac-problems-back" + (side == 1 ? "" : " not-picked-prac")} ref={ansRef}>
                <h3 className="card-title">Sagot</h3>
                {solution}
                {answer != null ? <p>Ang sagot ay {answer}.</p> : null}
                {/* <p className={"answer-alert"}>Click to see problem</p> */}
            </div>
        </div>
    )
}
