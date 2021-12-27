import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import petsReducer from '../../redux/reducers/pets.reducer';

function Missing(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer);
  const message=useSelector((store)=>store.messageReducer);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {if (pets.missing===true)
    {dispatch({ type: 'FETCH_PETS',
                payload: user.id });}
}, []);
  return (
    <div className="container">
      <h2>Missing Pets </h2>
      <p>{user.bio}</p>
      <h3>Name: {petsReducer.name}</h3>
        <p>Pet Description: {petsReducer.description}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Missing;
