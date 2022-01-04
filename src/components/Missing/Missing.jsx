import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MissingItem from '../MissingItem/MissingItem';
import petsReducer from '../../redux/reducers/pets.reducer';
import "../Missing/Missing.css"

function Missing(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer);
  const missing=useSelector((store)=>store.missingReducer);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MISSING',
              payload: user.id
                 });
}, []);



  return (
    <div className="container">
      <h2>Missing Pets </h2>
      <p>{user.bio}</p>
        <div className="missingCard">{missing.map(( missing )=>(  <MissingItem missing={missing}/>) )} </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Missing;
