import React, { useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Modal, Button, Table } from 'react-bootstrap';

function MissingItem(props) {
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

const isMissing = props.missing.missing;

  return (
    <div> 
    <div key={props.missing.id} >
      <br/>
      <Card className="full-card">
      <Card.Header className="card-header">
      <h3>{props.missing.name}</h3>
      </Card.Header>
      <Card.Img className="card-image" onClick={modalInfo} src={props.missing.photo} alt={props.missing.catdog}  />
      <ListGroup variant="flush" className="card-text">
        <ListGroup.Item>
        <p>{props.missing.description}</p></ListGroup.Item>
        <ListGroup.Item><p>Contact Information: {props.missing.missing_message}</p></ListGroup.Item>
        </ListGroup>
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
                <div className="submit-track-button">
                  <Link to="/all">
                    <Button className="submit-track-button" onClick={addNewTrack}>
                      Enter New Sighting
                    </Button>
                  </Link>
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
