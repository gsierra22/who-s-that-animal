import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";

function MyPetsItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const deleteButton = () => {
  console.log("Delete Pets:", props.pet.id);
  dispatch({ type: 'REMOVE_PETS',
              payload: props.pet.id });
};

const toggleMissing = () => {
  let  missingToSend= 
{id: props.pet.id,
missing: !props.pet.missing}
 dispatch({type: 'UPDATE_PETS', payload: missingToSend })
}

  return (
    <div> 
    <div className="petItem" key={props.pet.id} >
      <br/>
        <h3>Name: {props.pet.name}</h3>
        <p>Pet Description: {props.pet.description}</p>
        <p>Missing?: {props.pet.missing ? 'Yes': 'No'}<Link to="/mypets"><Button className='button' onClick={toggleMissing}>Set Missing</Button></Link></p>
        <Link to="/details"><img className="animalImage" onClick= {animalDetails}src={props.pet.photo} alt={props.pet.catdog}  /></Link>
        <Button className='button' onClick={handleShow}>Delete Pet</Button>
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
          Are you sure you want to delete {props.pet.name}?
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button
            className="btn-secondary noButton"
            onClick={handleClose}
          >
            No
          </Button>
          <Link to="/mypets"><Button className='button' onClick={deleteButton}>
            Yes
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MyPetsItem;
