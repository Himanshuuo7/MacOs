import React from 'react';
import MacWindow from './MacWindow';
import "./resume.scss"

const Resume = ({windowName, windowState, setwindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowName} setwindowState={setwindowState}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  );
}

export default Resume;
