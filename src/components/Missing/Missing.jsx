import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MissingItem from '../MissingItem/MissingItem';
import petsReducer from '../../redux/reducers/pets.reducer';

function Missing(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer);
  const missing=useSelector((store)=>store.missingReducer);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MISSING',
                 });
}, []);



  return (
    <div className="container">
      <h2>Missing Pets </h2>
      {JSON.stringify(missing)}
      <p>{user.bio}</p>
      <h3>Name: {pets.name}</h3>
        <p>Pet Description: {pets.description}</p>
        {missing.map(( missing )=>(  <MissingItem missing={missing}/>) )}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Missing;
