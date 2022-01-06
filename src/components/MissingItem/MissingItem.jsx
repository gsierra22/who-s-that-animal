import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function MissingItem(props) {
  const dispatch = useDispatch();

  const animalDetails = () => {
    console.log( 'in animalDetails', props.missing.id );
    //send dispatch to the store
    dispatch({
        type: 'SET_ID',
        payload: props.missing
  
    })
    dispatch({
        type: 'FETCH_TRACK',
        payload: props.missing.id
    })
  }


  return (
    <div> 
    <div key={props.missing.id} >
      <br/>
      <Card className="full-card">
      <Card.Header className="card-header">
      <h3>{props.missing.name}</h3>
      </Card.Header>
      <Link to="/details"> <Card.Img className="card-image" onClick={animalDetails} src={props.missing.photo} alt={props.missing.catdog}  /></Link>
      <ListGroup variant="flush" className="card-text">
        <ListGroup.Item>
        <p>{props.missing.description}</p></ListGroup.Item>
        <ListGroup.Item><p>Contact Information: {props.missing.missing_message}</p></ListGroup.Item>
        </ListGroup>
    </Card>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MissingItem;
