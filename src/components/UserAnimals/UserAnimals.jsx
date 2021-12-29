import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import UserAnimalsItem from '../UserAnimalsItem/UserAnimalsItem';

function UserAnimals(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  const track=useSelector((store)=>store.trackProfile)
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE',
                payload: {id: user.id,
                          name: track.name,
                          photo:track.photo}});

}, []);
 
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {JSON.stringify(track)}
      <p>Your ID is: {user.id}</p>
      <p>{user.bio}</p>
      { track.map(( track)=>( <UserAnimalsItem track={track}/>) )}
      <button ><Link to="/input">Input New Pet</Link></button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserAnimals;
