import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function AllAnimalsItem(props) {
  const dispatch = useDispatch();

  const animalDetails = () => {
    console.log( 'in animalDetails', props.pet.id );
    //send dispatch to the store
    dispatch({
        type: 'SET_ID',
        payload: props.pet
  
    })
    dispatch({
        type: 'FETCH_TRACK',
        payload: props.pet.id
    })
  }


  return (
    <div> 
    <div key={props.pet} >
    <h3>{props.pet.name}</h3>
        <p>{props.pet.description}</p>
        <Link to="/details"> <img onClick={animalDetails} src={props.pet.photo} alt={props.pet.catdog}  /></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
