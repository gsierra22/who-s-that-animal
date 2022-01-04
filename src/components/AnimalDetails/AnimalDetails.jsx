import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { checkPropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import "../AnimalDetails/AnimalDetails.css"

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
    pets_id: idr.id
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

  const isMissing = idr.missing;
  return (
    <div >
      <h2 className="details">Welcome to {idr.name}'s  profile!</h2>
      <img className="detailsImage" src={idr.photo} alt="No Photo"  />
      <div className="traits">
        <p>This pet is a {idr.catdog}</p>
      <p>Pet's Description: {idr.description}</p>
      <p>Home Neighborhood: {idr.neighborhood}</p>
      <p>Missing?: {isMissing ? 'Yes': 'No'}</p>
      </div>
      {track.map( (track) => <div><p>Date Seen:{track.dates}</p><p>Location Seen:{track.location}</p></div>)}
      <br/>
                <label>Enter the last known location description</label>
                <input type='text' placeholder='Location' value={newTrack.location} onChange={handleNewLocation} />
                
                <br/>
                <label>Enter the last known date seen</label>
                <input type='text' placeholder='Date' value={newTrack.dates} onChange={handleNewDate} />
                <Link to="/user"><Button onClick={addNewTrack}>Save</Button></Link>
      <Button ><Link to="/user">Back</Link></Button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AnimalDetails;
