import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Welcome to Who's that Animal!</h1>
        <p>This is the solo project completed by Giancarlo Sierra for Prime Digital Academy.</p>
        <h1>Technologies Used</h1>
        <p>Javascript, CSS, HTML, Bootstrap, Node.js, Express, React, Redux Saga</p>
        <h1>Thanks</h1>
        <p>I would like to thank our instructor, Dev Jana, and Casey Siekman, a Prime alum for helping us in our projects and past assignments
          I would also like to thank Hannah Fligel for designing the app logo, my Prime mentors Amanda Kirchner and Stav Kidron and the Ionian cohort for supporting each other during our time at Prime.
          Last I would like to thank my roommates for being supportive during the creation of this project.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
