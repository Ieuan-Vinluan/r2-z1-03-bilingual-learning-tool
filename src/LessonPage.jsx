import React from 'react'
import StandardHeader from './StandardHeader';

{ /* IDEA vertical navigation bar for content of lesson */ }

export default function LessonPage(props) {
    return (
      <>
        <main className="main-lesson-page">
          { props.children }
        </main>
      </>
    );
  }
