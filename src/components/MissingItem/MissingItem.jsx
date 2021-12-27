import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function MissingItem(props) {
  const dispatch = useDispatch();


  return (
    <div> 
    <div key={props.pets.id} >
      <br/>
        <h3>Name: {props.pets.name}</h3>
        <p>Pet Description: {props.pets.description}</p>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MissingItem;
