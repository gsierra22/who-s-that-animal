import React from 'react';
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import './LogOutButton.css'


function LogOutButton(props) {
  const dispatch = useDispatch();

  const signOutIcon= <FontAwesomeIcon icon={faSignOutAlt}/>
  return (
    <button
    id='LogOutButton'
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      {signOutIcon}
      <p className='NavText'>Log Out</p>
    </button>
  );
}

export default LogOutButton;
