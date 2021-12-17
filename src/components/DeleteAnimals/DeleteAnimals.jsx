import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function DeleteAnimals() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMALS' });
}, []);
const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)
  return (
    <div className="container">
      <h2>Are you sure you want to delete this animal?</h2>
      <button ><Link to="/user">Yes</Link></button>
      <button ><Link to="/user">No</Link></button>
      <p>{JSON.stringify(animals)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DeleteAnimals;
