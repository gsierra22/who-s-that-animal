import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import UserAnimalsItem from '../UserAnimalsItem/UserAnimalsItem';
import { DataRowMessage } from 'pg-protocol/dist/messages';
import"../UserAnimals/UserAnimals.css"
import Card from 'react-bootstrap/Card'
import trackProfile from '../../redux/reducers/profile.reducer';
import { Container } from 'react-bootstrap';

function UserAnimals(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const track=useSelector((store)=>store.trackProfile)

  
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE', //fetch pet's profile for track
                payload: {id: user.id
                        }},
            );
                        
}, []);
 
  return (
    <div>
    <Container className="container">
      <h2 className="header">Welcome, {user.username}!</h2>
      <p className="description">Your ID is: {user.id}</p>
      <p className="description">{user.bio}</p>
      <h3 className="header">Click on any pet!</h3>
      </Container>
      <br/>

      <Container className="container">
      <h3 className="header">Animals that you previously tracked!</h3>
      <div className="trackCard">{ track.map(( track)=>( <UserAnimalsItem track={track}/>) )}</div>
      <br/>
      <div className="log-out-div">Log out<LogOutButton className="log-out-button"/></div>
      </Container>
      </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserAnimals;
