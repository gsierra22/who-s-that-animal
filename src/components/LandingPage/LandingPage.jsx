import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_8">
        <h1>Welcome to Who's that Animal!</h1>
        <p>Ever seen a cute dog in your neighborhood or need help finding your pet? 
          Who's that Animal allows users to input when and where they last saw an animal.
          You could simply have fun listing all the pets in your neighborhood or you could post a missing pet add with your contact information in case your pet goes missing.</p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="yes-button" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
