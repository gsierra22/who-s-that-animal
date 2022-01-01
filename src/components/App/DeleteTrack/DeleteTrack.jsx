import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function DeleteTrack(props) 
{

  const dispatch = useDispatch();
  const deletePets=useSelector((store)=>store.deletePets);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  
  const DeleteTrack = () => {
    dispatch({ type: 'REMOVE_PETS',
    payload: deletePets });
};


  return (
    <div className="container">
      {JSON.stringify(deletePets)}
      <h2>Are you sure you want to delete this animal?</h2>
      <Link to="/user"><button onClick={DeleteTrack}>Yes</button></Link>
      <Link to="/user"><button >No</button></Link>
      <p>{JSON.stringify(deletePets)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DeleteTrack;
