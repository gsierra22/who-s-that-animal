import React, { useEffect,useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import trackModal from '../../redux/reducers/trackmodal.reducer';

function useAnimalsItem(props) {
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
            payload:{id: props.track.pets_id}
  })
  handleProfileShow()
}

const deleteButton = () => {
  console.log("Delete Track:", props.track);
  dispatch({ type: 'REMOVE_TRACK',
              payload: props.track });
};

let [newTrack, setTrack] = useState( 
  { 
    dates:'',
    location:'',
    user_id: user.id,
    pets_id: props.track.pets_id
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

const isMissing = props.track.missing;

 
  return (
    <div className='full-card'> 
    <div   key={props.track.description} >
      <Card className="full-card">
       <Card.Header className="card-header"> <h3>{props.track.name}</h3></Card.Header>
       <Card.Text className="card-text"> <p>{props.track.description}</p></Card.Text>
        <Card.Img className="card-image" onClick={modalInfo} src={props.track.photo} alt={props.track.catdog}/>
        <Card.Footer className="card-footer"><Button className='button' onClick={handleShow}>Unfollow Pet</Button></Card.Footer>
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
      <h2 className="details">Welcome to {props.track.name}'s  profile!</h2>
      <img className="detailsImage" src={props.track.photo} alt="No Photo"  />
      <div className="traits">
        <p>This track is a {props.track.catdog}</p>
      <p>Pet's Description: {props.track.description}</p>
      <p>Home Neighborhood: {props.track.neighborhood}</p>
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
            Yes
          </Button></Link>
                </div>
        </Modal.Body>
        
      </Modal>

        <Modal
        show={show}
        onHide={handleClose}
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
