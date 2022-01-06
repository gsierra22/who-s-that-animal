import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import MyPetsItem from '../MyPetsItem/MyPetsItem';
import "../MyPets/MyPets.css"

function MyPets(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_PETS',
                payload: user.id });
}, []);
  return (
    <div className="container">
      <h2 className='header'>Pets for {user.username}!</h2>
      <p className='description'>{user.bio}</p>
      <Link to="/input"><Button className='input-button'>Enter New Pet</Button></Link>
      <div className="petCard">{ pets.map(( pet )=>( <MyPetsItem pet={pet}/>) )}</div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MyPets;
