import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function AllAnimalsItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)

  return (
    <div> 
    <div key={props.pet.id} >
        <h3>{props.pet.description}</h3>
        <img src={props.pet.photo} alt={props.pet.catdog} />
        <Link to="/delete"><button >Delete Animal</button></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
