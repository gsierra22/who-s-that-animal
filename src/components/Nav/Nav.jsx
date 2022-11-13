import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,
        faQuestionCircle,
        faDog,
        faListAlt,
        faExclamationTriangle,
        faPaw} from "@fortawesome/free-solid-svg-icons";
import appLogo from "../../images/whosthatanimal-logo.png";

function Nav() {
  const user = useSelector((store) => store.user);

  const homeIcon= <FontAwesomeIcon icon={faHome}/>
  const aboutIcon= <FontAwesomeIcon icon={faQuestionCircle}/>
  const myPetsIcon= <FontAwesomeIcon icon={faDog}/>
  const allAnimalsIcon= <FontAwesomeIcon icon={faListAlt}/>
  const missingIcon= <FontAwesomeIcon icon={faExclamationTriangle}/>
  const pawIcon= <FontAwesomeIcon icon={faPaw}/>
  

  return (
    <div className="nav">
      <Link to="/home">
        {/* <h2 className="nav-title">Who's that animal? {pawIcon}</h2> */}
        <img className="app-logo" src={appLogo}/>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              {homeIcon}
              <p className='NavText'>Home</p>
            </Link>

            <Link className="navLink" to="/mypets">
              {myPetsIcon}
              <p className='NavText'>My Pets</p>
            </Link>

            <Link className="navLink" to="/all">
              {allAnimalsIcon}
              <p className='NavText'>All Pets</p>
            </Link>

            <Link className="navLink" to="/missing">
              {missingIcon}
              <p className='NavText'>Missing Pets</p>
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
        {aboutIcon}
        <p className='NavText'>About</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
