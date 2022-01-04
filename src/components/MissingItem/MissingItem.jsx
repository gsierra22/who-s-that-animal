import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function MissingItem(props) {
  const dispatch = useDispatch();

  const animalDetails = () => {
    console.log( 'in animalDetails', props.missing.id );
    //send dispatch to the store
    dispatch({
        type: 'SET_ID',
        payload: props.missing
  
    })
    dispatch({
        type: 'FETCH_MISSING',
        payload: props.missing.id
    })
  }


  return (
    <div> 
    <div key={props.missing.id} >
      <br/>
      <h3>{props.missing.name}</h3>
        <p>{props.missing.description}</p>
        <p>Contact Information: {props.missing.missing_message}</p>
        <Link to="/details"> <img className="animalImage" onClick={animalDetails} src={props.missing.photo} alt={props.missing.catdog}  /></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MissingItem;
