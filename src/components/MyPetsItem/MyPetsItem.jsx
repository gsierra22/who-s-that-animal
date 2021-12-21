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


  return (
    <div> 
    <div key={props.pet.id} >
        <h3>{props.pet.description}</h3>
        <Link to="/details"><img src={props.pet.photo} alt={props.pet.catdog}  /></Link>
        <Link to="/delete"><button onClick={storeDelete}>Delete Pet</button></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MyPetsItem;
