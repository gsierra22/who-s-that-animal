import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Container, Card, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import MyPetsItem from '../MyPetsItem/MyPetsItem';
import "../MyPets/MyPets.css"

function MyPets(props) {
const dispatch = useDispatch();

const user = useSelector((store) => store.user);
const pets=useSelector((store)=>store.petsReducer);
 
  useEffect(() => {
    dispatch({ type: 'FETCH_PETS', //display's user's personal pet
                payload: user.id }); 
}, []);

const [show, setInputShow] = useState(false);
  
  const handleInputClose = () => setInputShow(false);//new pet input modal toggle functions
  const handleInputShow = () => setInputShow(true);




let [newPet, setPet] = useState( 
  { name:'',
    catdog: 'Cat',
    missing: true,
    description:'',
    location:'',
    dates:'',
    neighborhood:'',
    photo:'',
    missing_message:'',
    user_id: user.id
  });

  const addNewPet = event => {
    dispatch({ type: 'ADD_PETS', payload: newPet });//button click dispatches new pet entry
}

const handleNewName = (event) => {//input for name form
  console.log('event happened');
  //input new pet name
  setPet({...newPet, name: event.target.value})
}

const handleNewCatdog = (event) => {//input for catdog form
  console.log('event happened');
   //input new pet catdog
  setPet({...newPet, catdog: event.target.value})
}

const handleNewMissing = (event) => {//input for missing form
  console.log('missing happened', event.target.value);
   //input new pet missing status
  setPet({...newPet, missing: event.target.value})
}

const handleNewDescription = (event) => {//input for description form
  console.log('event happened');
   //input new pet description
  setPet({...newPet, description: event.target.value})
}

const handleNewLocation = (event) => {//input for location form
  console.log('event happened');
   //input new pet location
  setPet({...newPet, location: event.target.value})
}

const handleNewDate = (event) => {//input for date form
  console.log('event happened');
   //input new pet date seen
  setPet({...newPet, dates: event.target.value})
}

const handleNewNeighborhood = (event) => {//input for neighborhood form
  console.log('event happened');
   //input new pet name neighborhood
  setPet({...newPet, neighborhood: event.target.value})
}

const handleNewPhoto = (event) => {//input for photo form
  console.log('event happened');
   //input new pet photo
  setPet({...newPet, photo: event.target.value})
}
const handleNewMessage = (event) => {//input for message form
  console.log('event happened');
   //input new pet message
  setPet({...newPet, missing_message: event.target.value})
}



  return (
    <div>
      {/* input Container */}
    <Container className="container">
      <h2 className='header'>Pets for {user.username}!</h2>
      <p className='description'>{user.bio}</p>
      <div className="input-div"><Button className='input-button' onClick={handleInputShow}>Enter New Pet</Button></div>
      </Container>

      {/* pet profile container */}
      <br/>
      <Container className="container">
      <h3 className="header">Click on any pet!</h3>
      <div className="petCard">{ pets.map(( pet )=>( <MyPetsItem pet={pet}/>) )}</div>
      <br/>
      </Container>

{/* modal for new pet input */}
      <Modal
        show={show}
        onHide={handleInputClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Enter your new pets information!</Modal.Title>
        </Modal.Header>
        <form onSubmit={addNewPet}>
        <Modal.Body className="modalBody">
        <br/>
                <center><label>Enter your pet's name</label></center>
                <center><input type='text' placeholder='Name' value={newPet.name} onChange={handleNewName} /></center>

                <br/>
              <center><label>Cat or Dog?</label></center>
                <center><select type='text' placeholder='Cat or Dog' value={newPet.catdog} onChange={handleNewCatdog} >
                  <option value={'Cat'}>Cat</option>
                  <option value={'Dog'}>Dog</option>
                  </select></center>

                  <br/>
                <center><label>Is your pet missing?</label></center>
               <center> <select value={newPet.missing} placeholder='Missing' onChange={( event )=>handleNewMissing( event )}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select></center>

                <br/>
               <center> <label>Enter your pet's description</label></center>
                <center><input type='text' placeholder='Description' value={newPet.description} onChange={handleNewDescription} /></center>
                
                <br/>
                <center><label>Enter your neighborhood</label></center>
                <center><input type='text' placeholder='Neighborhood' value={newPet.neighborhood} onChange={handleNewNeighborhood} /></center>
                
                <br/>
                <center><label>Enter the pet's photo</label></center>
                <center><input type='text' className="image" placeholder='Photo' value={newPet.photo} onChange={handleNewPhoto} /></center>

                <br/>
                <center><label>Description of last known location</label></center>
                <center><input type='text' placeholder='Location' value={newPet.location} onChange={handleNewLocation} /></center>
                
                <br/>
                <center><label>Enter the last known date seen</label></center>
                <center><input type='text' placeholder='Date' value={newPet.dates} onChange={handleNewDate} /></center>

                <br/>
                <center><label>Enter contact information in case your pet goes missing!</label></center>
                <center><input type='text' placeholder='Message' value={newPet.missing_message} onChange={handleNewMessage} /></center>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button
            className="no-button"
            onClick={handleInputClose}
          >
            Back
          </Button>
          <Link to="/mypets">
            <Button className="yes-button" onClick={addNewPet}>Save</Button>
            </Link>
        </Modal.Footer></form>
      </Modal>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MyPets;
