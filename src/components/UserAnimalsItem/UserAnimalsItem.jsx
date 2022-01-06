import React, { useEffect,useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import Card from 'react-bootstrap/Card'

function useAnimalsItem(props) {
  const dispatch = useDispatch();

const animalDetails = () => {
  console.log( 'in animalDetails', props.track.id );
  //send dispatch to the store
  dispatch({
      type: 'SET_ID',
      payload: props.track
  })
  dispatch({
      type: 'FETCH_TRACK',
      payload: props.track.pets_id
  })
}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const deleteButton = () => {
  console.log("Delete Track:", props.track);
  dispatch({ type: 'REMOVE_TRACK',
              payload: props.track });
};

 
  return (
    <div> {JSON.stringify(props.track.id)}
    <div key={props.track.description} >
      <Card className="full-card">
       <Card.Header className="card-header"> <h3>{props.track.name}</h3></Card.Header>
       <Card.Text className="card-text"> <p>{props.track.description}</p></Card.Text>
        <Link to="/details" ><Card.Img className="card-image" onClick={animalDetails} src={props.track.photo} alt={props.track.catdog}  /></Link>
        <Card.Footer className="card-footer"><Button className='button' onClick={handleShow}>Unfollow Pet</Button></Card.Footer>
        </Card>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          Are you sure you want to stop following {props.track.name}?
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button
            className="btn-secondary noButton"
            onClick={handleClose}
          >
            No
          </Button>
          <Link to="/user"><Button className="YesButton" onClick={deleteButton}>
            Yes
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default useAnimalsItem;
