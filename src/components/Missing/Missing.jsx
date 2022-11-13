import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MissingItem from '../MissingItem/MissingItem';
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
      <h3 className="header">Click on any pet!</h3>
        <div className="missingCard">{missing.map(( missing )=>(  <MissingItem missing={missing}/>) )}</div>
        <br/>
    </div>
    

  );
}

// this allows us to use <App /> in index.js
export default Missing;
