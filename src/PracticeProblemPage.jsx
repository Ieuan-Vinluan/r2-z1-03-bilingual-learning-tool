import React from 'react'
import LessonSection from './LessonSection'

export default function PracticeProblemPage({ challenge, practiceProblem }) {
    return (
        <LessonSection>
            <h2>{challenge ? "Challenge Problems!" : "Practice Problems"}</h2>
            <hr />
            <div className="prac-problems-container">
                {practiceProblem}
            </div>
        </LessonSection>
    )
}
