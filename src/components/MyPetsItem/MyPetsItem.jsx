import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import userSaga from '../../redux/sagas/user.saga';

function MyPetsItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

const toggleMissing = () => {
  let  missingToSend= 
{id: props.pet.id,
missing: !props.pet.missing}
 dispatch({type: 'UPDATE_PETS', payload: missingToSend })
}

  return (
    <div> 
    <div className="petItem" key={props.pet.id} >
      <br/>
        <h3>Name: {props.pet.name}</h3>
        <p>Pet Description: {props.pet.description}</p>
        <p>Missing?: {props.pet.missing ? 'Yes': 'No'}<Link to="/mypets"><button onClick={toggleMissing}>Set Missing</button></Link></p>
        <Link to="/details"><img className="animalImage" onClick= {animalDetails}src={props.pet.photo} alt={props.pet.catdog}  /></Link>
        <Link to="/delete"><button onClick={storeDelete}>Delete Pet</button></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MyPetsItem;
