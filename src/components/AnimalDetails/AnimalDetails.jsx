import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function AnimalDetails(props) {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  const idr= useSelector((store)=>store.idReducer)
  const track=useSelector((store)=>store.trackReducer)

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL' });
}, []);

let [newTrack, setTrack] = useState( 
  { 
    dates:'',
    location:'',
    user_id: user.id,
    pets_id: pets.id
  });

  const addNewTrack = event => {
    dispatch({ type: 'ADD_TRACK', payload: newTrack });
}

  const handleNewLocation = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setTrack({...newTrack, location: event.target.value})
  }

  const handleNewDate = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setTrack({...newTrack, dates: event.target.value})
  }
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
      <p>Missing?:{idr.missing}</p>
      <p>{idr.location}</p>
      {track.map( (track) => <p>{track.dates},{track.location}</p>)}
      <br/>
                <label>Enter the last known location description</label>
                <input type='text' placeholder='Location' value={newTrack.location} onChange={handleNewLocation} />
                
                <br/>
                <label>Enter the last known date seen</label>
                <input type='text' placeholder='Date' value={newTrack.dates} onChange={handleNewDate} />
                <Link to="/user"><button onClick={addNewTrack}>Save</button></Link>
      <button ><Link to="/user">Back</Link></button>
      <p>{JSON.stringify(track)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AnimalDetails;
