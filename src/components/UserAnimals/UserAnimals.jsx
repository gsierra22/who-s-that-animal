import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import UserAnimalsItem from '../UserAnimalsItem/UserAnimalsItem';
import { DataRowMessage } from 'pg-protocol/dist/messages';
import"../UserAnimals/UserAnimals.css"
import Card from 'react-bootstrap/Card'

function UserAnimals(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  const track=useSelector((store)=>store.trackProfile)
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE',
                payload: {id: user.id
                        }});
}, []);
 
  return (
    <div className="trackContainer">
      <h2 className="header">Welcome, {user.username}!</h2>
      <p className="description">Your ID is: {user.id}</p>
      <p className="description">{user.bio}</p>
      <h3 className="header">Animals that you previously tracked!</h3>
      <div className="trackCard">{ track.map(( track)=>( <UserAnimalsItem track={track}/>) )}</div>
      <br/>
      <div>Log out<LogOutButton className="btn" /></div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserAnimals;
