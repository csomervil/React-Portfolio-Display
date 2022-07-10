import React from 'react';
import resumeLink from '../../assets/resume.txt';
document.body.style = 'background: grey;';
export default function Resume() {
  return (
    <body>
    <div>
      <h1>Resume</h1>
      <p>
      <a href={resumeLink} download>
        Link to downloadable resume:
      </a>
      </p>
      <p>
      Proficiencies:
      <li>
        Working with python
      </li>
      <li>
        Arithmetic/problem solving
      </li>
      <li>
        Creative writing
      </li>
      <li>
        Audio production
      </li>
      </p>
    </div>
    </body>
  );
}
