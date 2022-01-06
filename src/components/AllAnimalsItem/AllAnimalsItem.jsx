import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

function AllAnimalsItem(props) {
  const dispatch = useDispatch();

  const animalDetails = () => {
    console.log( 'in animalDetails', props.pet.id );
    //send dispatch to the store
    dispatch({
        type: 'SET_ID',
        payload: props.pet
  
    })
    dispatch({
        type: 'FETCH_TRACK',
        payload: props.pet.id
    })
  }


  return ( 
    <div>
    <Card className="full-card">
      <Card.Header className="card-header">
    <h3>{props.pet.name}</h3>
    </Card.Header>
    <Link to="/details"> <Card.Img className="card-image" onClick={animalDetails} src={props.pet.photo} alt={props.pet.catdog}  /></Link>
    <Card.Text className="card-text"> 
    <p>{props.pet.description}</p>
    </Card.Text>
        </Card>
        <br/>
        </div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
