import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function useAnimalsItem(props) {
  const dispatch = useDispatch();


//   const storeDelete = () => {
//     dispatch({ type: 'SET_DELETE',
//     payload: props.pet.id });
// };

const storeTrackDelete = () => {
  dispatch({ type: 'SET_DELETE',
  payload: props.track });
};

 
  return (
    <div> 
    <div key={props.track.description} >
        <h3>{props.track.name}</h3>
        <p>{props.track.neighborhood}</p>
        <Link to="/details"><img src={props.track.photo} alt={props.track.catdog}  /></Link>
        <Link to="/deletetrack"><button onClick={storeTrackDelete}>Delete Pet</button></Link>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default useAnimalsItem;
