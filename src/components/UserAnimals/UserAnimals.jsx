import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';

function UserAnimals() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMALS' });
}, []);
const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <p>{JSON.stringify(animals)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserAnimals;
