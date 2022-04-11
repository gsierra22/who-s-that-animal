import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card, Modal, Button, Table, ListGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";

function AllAnimalsItem(props) {
  const pawIcon= <FontAwesomeIcon icon={faPaw}/>
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const trackModal=useSelector((store)=>store.trackModal)

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const modalInfo =() => {
  dispatch ({type: 'FETCH_TRACKMODAL',//dispatch for modal information
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
  dispatch({ type: 'ADD_TRACK', payload: newTrack });//adds new track information
}

const handleNewLocation = (event) => {
  console.log('event happened');//function for new location input
  setTrack({...newTrack, location: event.target.value})
}

const handleNewDate = (event) => {
  console.log('event happened');//function for new date input
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
     <ListGroup variant="flush" >
       <ListGroup.Item>
       <center><Card.Text className="contact-header">Description</Card.Text></center>
    <Card.Text className="card-text"> 
    <p>{props.pet.description}</p>
    </Card.Text></ListGroup.Item>
    </ListGroup>
    </Card.Body>
    <Card.Footer className="card-paw-footer">{pawIcon}{pawIcon}{pawIcon}</Card.Footer>
        </Card>

        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="modal-title" closeButton>
            <Modal.Title className="modal-title">Welcome to {props.pet.name}'s  profile!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
              <center className="modal-image">
                <img src={props.pet.photo} alt="No Photo" />
              </center>
              <div className="traits">
                <p>This pet is a {props.pet.catdog}</p>
                <p>Pet's Description: {props.pet.description}</p>
                <p>Home Neighborhood: {props.pet.neighborhood}</p>
                <p>Missing?: {isMissing ? 'Yes' : 'No'}</p>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Location Seen</th>
                    <th>Date Seen</th>
                  </tr>
                </thead>
                <tbody>
                    {trackModal.map((track) => (<tr><td>{track.location}</td><td>{track.dates}</td></tr>))}
                </tbody>
              </Table>
              <br />
              <div className='sight-input'>
                <div>
                  <div><h1 className='modal-header'>Enter the last known location description</h1></div>
                  <div><center><input type='text' placeholder='Location' value={newTrack.location} onChange={handleNewLocation} /></center></div>
                  </div>
                  <div>
                  <div><h1 className='modal-header'>Enter the last known date seen</h1>
                  <center><input type='text' placeholder='Date' value={newTrack.dates} onChange={handleNewDate} /></center>
                  </div>
                <div >
                  <center>
                  <Link to="/all">
                    <Button className="submit-track-button" onClick={addNewTrack}>
                      Enter New Sighting
                    </Button>
                  </Link>
                  </center>
                </div>
              </div>
              
            </div>
          </Modal.Body>

        </Modal>
        <br/>
        </div>
  );
}

// this allows us to use <App /> in index.js
export default AllAnimalsItem;
