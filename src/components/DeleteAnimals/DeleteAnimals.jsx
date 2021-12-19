import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function DeleteAnimals(props) 
{

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'REMOVE_ANIMALS',
    payload: animals[0].id });
}, []);


  return (
    <div className="container">
      <h2>Are you sure you want to delete this animal?</h2>
      <Link to="/user"><button onClick={DeleteAnimals}>Yes</button></Link>
      <Link to="/user"><button >No</button></Link>
      <p>{JSON.stringify(animals[0])}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DeleteAnimals;
