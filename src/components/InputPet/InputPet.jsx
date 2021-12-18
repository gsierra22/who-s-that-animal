import React, { useState,useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function InputPet() {
const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const animals=useSelector((store)=>store.animalsReducer)

  let [newPet, setPet] = useState(
    {
      catdog:'',
      missing:'',
      description:'',
      location:'',
      date:'',
      neighborhood:'',
      photo:'',
      user_id: user.id
    });

    const addNewPet = event => {
      dispatch({ type: 'ADD_ANIMALS', payload: newPet });
  }

  const handleNewCatdog = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, catdog: event.target.value})
  }

  const handleNewMissing = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, missing: event.target.value})
  }

  const handleNewDescription = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, description: event.target.value})
  }

  const handleNewLocation = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, location: event.target.value})
  }

  const handleNewDate = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, date: event.target.value})
  }

  const handleNewNeighborhood = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, neighborhood: event.target.value})
  }

  const handleNewPhoto = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, photo: event.target.value})
  }

  return (
    <div className="container">
      <h1>Add a new pet, {user.username}!</h1>
      <form onSubmit={addNewPet}>
        <br/>
              <label>Cat or Dog?</label>
                <select type='text' placeholder='Cat or Dog' value={newPet.catdog} onChange={handleNewCatdog} >
                  <option value={1}>Cat</option>
                  <option value={2}>Dog</option>
                  </select>
                  <br/>
                <label>Is your pet missing?</label>
                {/* <select value={newPet.missing} placeholder='Missing' onChange={( event )=>handleNewMissing( event )}>
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select> */}
                <input type='text' placeholder='Description' value={newPet.missing} onChange={handleNewMissing} />
                <br/>
                <label>Enter your pet's name and description</label>
                <input type='text' placeholder='Description' value={newPet.description} onChange={handleNewDescription} />
                <br/>
                <label>Enter the last known location description</label>
                <input type='text' placeholder='Location' value={newPet.location} onChange={handleNewLocation} />
                <br/>
                <label>Enter the last known date seen</label>
                <input type='text' placeholder='Date' value={newPet.date} onChange={handleNewDate} />
                <br/>
                <label>Enter your neighborhood</label>
                <input type='text' placeholder='Neighborhood' value={newPet.neighborhood} onChange={handleNewNeighborhood} />
                <br/>
                <label>Enter the pet's photo</label>
                <input type='text' className="image" placeholder='Poster' value={newPet.photo} onChange={handleNewPhoto} />
                <Link to="/mypets"><button onClick={addNewPet}>Save</button></Link>
            </form>
      <button ><Link to="/user">Back</Link></button>
      <p>{JSON.stringify(animals)}
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default InputPet;
