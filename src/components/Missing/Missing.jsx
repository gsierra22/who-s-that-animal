import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MissingItem from '../MissingItem/MissingItem';
import petsReducer from '../../redux/reducers/pets.reducer';
import "../Missing/Missing.css"

function Missing(props) {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const missing=useSelector((store)=>store.missingReducer);
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MISSING', //displays pets listed as missing in database
              payload: user.id
                 });
}, []);



  return (
    <div className="container">
      <h2 className="header">Missing Pets </h2>
        <div className="missingCard">{missing.map(( missing )=>(  <MissingItem missing={missing}/>) )}</div>
        <br/>
        <div className="log-out-div">Log Out<LogOutButton className="log-out-button" /></div>
    </div>
    

  );
}

// this allows us to use <App /> in index.js
export default Missing;
