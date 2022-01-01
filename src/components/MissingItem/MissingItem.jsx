import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function MissingItem(props) {
  const dispatch = useDispatch();


  return (
    <div> 
    <div key={props.missing.id} >
      <br/>
        <h3>Name: {props.missing.name}</h3>
        <p>Pet Description: {props.missing.description}</p>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MissingItem;
