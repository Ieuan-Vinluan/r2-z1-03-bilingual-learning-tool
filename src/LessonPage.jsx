import React from 'react'
import StandardHeader from './StandardHeader';

export default function LessonPage(props) {
    return (
      <>
        <main>
          { props.children }
        </main>
      </>
    );
  }
