import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card, Modal, Button} from 'react-bootstrap';

function AllAnimalsItem(props) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const trackModal=useSelector((store)=>store.trackModal)

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const modalInfo =() => {
  dispatch ({type: 'FETCH_TRACKMODAL',
            payload:{id: props.pet.id}
  })
  handleShow()
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

const isMissing = props.pet.missing;


  return ( 
    <div>
    <Card className="full-card">
      <Card.Header className="card-header">
    <h3>{props.pet.name}</h3>
    </Card.Header>
    <Card.Body>
     <Card.Img className="card-image" onClick={modalInfo} src={props.pet.photo} alt={props.pet.catdog}  />
    <Card.Text className="card-text"> 
    <p>{props.pet.description}</p>
    </Card.Text></Card.Body>
        </Card>

        <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
        <div >
      <h2 className="details">Welcome to {props.pet.name}'s  profile!</h2>
      <img onClick={handleShow} className="detailsImage" src={props.pet.photo} alt="No Photo"  />
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
                </div>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button
            className="btn-secondary noButton"
            onClick={handleClose}
          >
            No
          </Button>
          <Link to="/all"><Button className="YesButton" onClick={addNewTrack}>
            Yes
          </Button></Link>
        </Modal.Footer>
      </Modal>
        <br/>
        </div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
