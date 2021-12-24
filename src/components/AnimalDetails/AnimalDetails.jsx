import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function AnimalDetails(props) {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL' });
}, []);
const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  const idr= useSelector((store)=>store.idReducer)
  const track=useSelector((store)=>store.trackReducer)
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>{user.bio}</p>
      <p>{idr.name}</p>
      <p>{idr.catdog}</p>
      <img src={idr.photo} alt="No Photo"  />
      <p>{idr.description}</p>
      <p>{idr.neighborhood}</p>
      <p>{idr.missing}</p>
      <p>{idr.location}</p>
      {track.map( (track) => <p>{track.dates},{track.location}</p>)}
      <button ><Link to="/user">Back</Link></button>
      <p>{JSON.stringify(track)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AnimalDetails;
