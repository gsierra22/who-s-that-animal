import React, { useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Modal, Button, Table } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import "../Missing/Missing.css"

function MissingItem(props) {
  const pawIcon= <FontAwesomeIcon icon={faPaw}/>
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const trackModal=useSelector((store)=>store.trackModal)

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const modalInfo =() => {
  dispatch ({type: 'FETCH_TRACKMODAL',
            payload:{id: props.missing.id}
  })
  handleShow()
}

let [newTrack, setTrack] = useState( 
  { 
    dates:'',
    location:'',
    user_id: user.id,
    pets_id: props.missing.id
  });

const addNewTrack = event => {
  dispatch({ type: 'ADD_TRACK', payload: newTrack }); //adds new tracking info for pet
}

const handleNewLocation = (event) => {
  console.log('event happened');
  //input track location
  setTrack({...newTrack, location: event.target.value})
}

const handleNewDate = (event) => {
  console.log('event happened');
  //input track date
  setTrack({...newTrack, dates: event.target.value})
}

const isMissing = props.missing.missing;

  return (
    <div> 
    <div key={props.missing.id} >
      <br/>
      <Card className="full-card">
      <Card.Header className="card-header">
    <h3>{props.missing.name}</h3>
    </Card.Header>
    <Card.Body>
     <Card.Img className="card-image" onClick={modalInfo} src={props.missing.photo} alt={props.missing.catdog}  />
     <ListGroup variant="flush" >
       <ListGroup.Item>
       <center><Card.Text className="contact-header">Description</Card.Text></center>
    <Card.Text className="card-text"> 
    <p>{props.missing.description}</p>
    </Card.Text>
    <center><Card.Text className="contact-header">Contact Information</Card.Text></center>
    <Card.Text>{props.missing.missing_message}</Card.Text>
    </ListGroup.Item>
    </ListGroup>
    </Card.Body>
    <Card.Footer className="card-paw-footer">{pawIcon}{pawIcon}{pawIcon}</Card.Footer>
        </Card>

    <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="modal-title" closeButton>
            <Modal.Title className="modal-title">Welcome to {props.missing.name}'s  profile!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
              <center className="modal-image">
                <img src={props.missing.photo} alt="No Photo" />
              </center>
              <div className="traits">
                <p>This pet is a {props.missing.catdog}</p>
                <p>Pet's Description: {props.missing.description}</p>
                <p>Home Neighborhood: {props.missing.neighborhood}</p>
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
                <div>
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
    </div>
</div>
  );
}

// this allows us to use <App /> in index.js
export default MissingItem;
