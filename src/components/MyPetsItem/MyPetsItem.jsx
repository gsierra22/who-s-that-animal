import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function MyPetsItem(props) {
  const dispatch = useDispatch();


  const storeDelete = () => {
    dispatch({ type: 'SET_DELETE',
    payload: props.pet.id });
};

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

const isMissing = props.pet.missing;

  return (
    <div> 
    <div key={props.pet.id} >
      <br/>
        <h3>Name: {props.pet.name}</h3>
        <p>Pet Description: {props.pet.description}</p>
        <p>Missing?: {isMissing ? 'Yes': 'No'}<button>Set Missing</button></p>
        <Link to="/details"><img onClick= {animalDetails}src={props.pet.photo} alt={props.pet.catdog}  /></Link>
        <Link to="/delete"><button onClick={storeDelete}>Delete Pet</button></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MyPetsItem;
