import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AllAnimalsItem from '../AllAnimalsItem/AllAnimalsItem';
import "../AllAnimals/AllAnimals.css"

function AllAnimals(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets=useSelector((store)=>store.petsReducer)
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL', //Dispatch displays all animals in server
                });
}, []);


  return (
    <div className="container">
      <h2 className="header">Welcome to the full list of animals, {user.username}!</h2>
      <h3 className="header">Click on any pet!</h3>
      <br/>
      <div className="animalCard">
      { pets.map(( pet )=>( <AllAnimalsItem pet={pet}/>) )}
      </div>
    </div>
  );
}

export default AllAnimals;
