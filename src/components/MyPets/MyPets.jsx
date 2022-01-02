import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MyPetsItem from '../MyPetsItem/MyPetsItem';

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
      <h2>Pets for {user.username}!</h2>
      <p>{user.bio}</p>
      <Link to="/input"><button>Enter New Pet</button></Link>
      { pets.map(( pet )=>( <MyPetsItem pet={pet}/>) )}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MyPets;
