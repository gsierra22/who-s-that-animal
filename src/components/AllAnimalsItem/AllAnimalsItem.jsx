import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function AllAnimalsItem(props) {


  return (
    <div> 
    <div key={props.pet} >
        <h3>{props.pet.description}</h3>
        <Link to="/details"> <img src={props.pet.photo} alt={props.pet.catdog}  /></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
