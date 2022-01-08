import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Card, Modal, ListGroup, ListGroupItem } from "react-bootstrap";

function MyPetsItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const trackModal=useSelector((store)=>store.trackModal)

  const [show, setShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleProfileClose = () => setProfileShow(false);
  const handleShow = () => setShow(true);
  const handleProfileShow = () => setProfileShow(true);
  
  const modalInfo =() => {
    dispatch ({type: 'FETCH_TRACKMODAL',
              payload:{id: props.pet.id}
    })
    handleProfileShow()
  }

  let [newTrack, setTrack] = useState( 
    { 
      dates:'',
      location:'',
      user_id: user.id,
      pets_id: props.pet.id
    });
  
  const addNewTrack = event => {
    dispatch({ type: 'ADD_TRACK', payload: newTrack });
  }
  
  const handleNewLocation = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setTrack({...newTrack, location: event.target.value})
  }
  
  const handleNewDate = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setTrack({...newTrack, dates: event.target.value})
  }

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

const isMissing = props.pet.missing;

  return (
    <div> 
    <div className="petItem" key={props.pet.id} >
      <br/>
      <Card className="full-card">
      <Card.Header className="card-header">
        {JSON.stringify(props.pet.id)}
        <h3>{props.pet.name}</h3>
        </Card.Header>
        <Card.Img className="card-image" onClick= {modalInfo}src={props.pet.photo} alt={props.pet.catdog}/>
        <ListGroup variant="flush" className="card-text">
        <ListGroup.Item><h4>Extra Information for this cute pet!</h4></ListGroup.Item>
        <ListGroup.Item><p> {props.pet.description}</p>
        <p>Missing?: {props.pet.missing ? 'Yes': 'No'}</p>
        <Link to="/mypets"><Button className='button' onClick={toggleMissing}>{props.pet.missing ? 'Set as not missing':'Set as missing'}</Button></Link></ListGroup.Item>
        </ListGroup>
        <Card.Footer className="card-footer">
        <Button className='button' onClick={handleShow}>Delete Pet</Button></Card.Footer>
        </Card>

        <Modal
        show={profileShow}
        onHide={handleProfileClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
        <div >
      <h2 className="details">Welcome to {props.pet.name}'s  profile!</h2>
      <img className="detailsImage" src={props.pet.photo} alt="No Photo"  />
      <div className="traits">
        <p>This pet is a {props.pet.catdog}</p>
      <p>Pet's Description: {props.pet.description}</p>
      <p>Home Neighborhood: {props.pet.neighborhood}</p>
      <p>Missing?: {isMissing ? 'Yes': 'No'}</p>
      </div>
      {trackModal.map( (track) => <div><p>Date Seen:{track.dates}</p><p>Location Seen:{track.location}</p></div>)}
      <br/>
                <label>Enter the last known location description</label>
                <input type='text' placeholder='Location' value={newTrack.location} onChange={handleNewLocation} />
                
                <br/>
                <label>Enter the last known date seen</label>
                <input type='text' placeholder='Date' value={newTrack.dates} onChange={handleNewDate} />
                <Link to="/mypets"><Button className="YesButton" onClick={addNewTrack}>
            Enter New Sighting
          </Button></Link>
                </div>
        </Modal.Body>
        
      </Modal>
        
        
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
