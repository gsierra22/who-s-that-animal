import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function DeleteAnimals(props) 
{

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'REMOVE_PETS',
    payload: pets.id });
}, []);


  return (
    <div className="container">
      <h2>Are you sure you want to delete this animal?</h2>
      <Link to="/user"><button onClick={DeleteAnimals}>Yes</button></Link>
      <Link to="/user"><button >No</button></Link>
      <p>{JSON.stringify(pets[0])}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DeleteAnimals;
