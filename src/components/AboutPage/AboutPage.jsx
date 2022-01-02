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
        <p>Ever seen a cute dog in your neighborhood or need help finding your pet? 
          Who's that Animal allows users to input when and where they last saw an animal.
          You could simply have fun listing all the pets in your neighborhood or you could post a missing pet add with your contact information in case your pet goes missing.</p>
      </div>
    </div>
  );
}

export default AboutPage;
