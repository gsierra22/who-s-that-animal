import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import AllAnimalsItem from '../AllAnimalsItem/AllAnimalsItem';

function AllAnimals(props) {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL',
                });
}, []);


  return (
    <div className="container">
      <h2>Welcome to the full list of animals, {user.username}!</h2>
      <div>
      { pets.map(( pet )=>( <AllAnimalsItem pet={pet}/>) )}
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimals;
