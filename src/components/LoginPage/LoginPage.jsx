import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <center><Button
          type="button"
          className="yes-button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
        </center>
      </center>
    </div>
  );
}

export default LoginPage;
