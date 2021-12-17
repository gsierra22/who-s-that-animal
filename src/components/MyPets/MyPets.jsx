import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function MyPets() {
  return (
    <div className="container">
      <p>My Pets</p>
    </div>
  );
}

export default MyPets;
