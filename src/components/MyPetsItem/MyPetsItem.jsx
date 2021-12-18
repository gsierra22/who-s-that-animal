import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function MyPetsItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)
const pushList = () => {
  console.log( 'Animals', props.pets.id );
  dispatch({
      type: 'FETCH_ANIMALS',
      payload: props.pets.id
  })
}
  return (
    <div> 
    <div key={props.pet.id} >
        <h3>{props.pet.description}</h3>
        <img src={props.pet.photo} alt={props.pet.catdog} onClick={pushList} />
        <button>Delete</button>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MyPetsItem;
