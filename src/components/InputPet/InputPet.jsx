import React, { useState,useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function InputPet() {
const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const track=useSelector((store)=>store.trackReducer)




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

  //   const addNewPet = event => {
  //     dispatch({ type: 'ADD_PETS', payload: newPet });
  // }

  const handleNewName = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, name: event.target.value})
  }

  const handleNewCatdog = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, catdog: event.target.value})
  }

  const handleNewMissing = (event) => {
    console.log('missing happened', event.target.value);
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
    setPet({...newPet, dates: event.target.value})
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
  const handleNewMessage = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPet({...newPet, missing_message: event.target.value})
  }


  return (
    <div className="container">
      <h1>Add a new pet, {user.username}!</h1>
      <form onSubmit={addNewPet}>

              <br/>
                <label>Enter your pet's name</label>
                <input type='text' placeholder='Name' value={newPet.name} onChange={handleNewName} />

                <br/>
              <label>Cat or Dog?</label>
                <select type='text' placeholder='Cat or Dog' value={newPet.catdog} onChange={handleNewCatdog} >
                  <option value={'Cat'}>Cat</option>
                  <option value={'Dog'}>Dog</option>
                  </select>

                  <br/>
                <label>Is your pet missing?</label>
                <select value={newPet.missing} placeholder='Missing' onChange={( event )=>handleNewMissing( event )}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>

                <br/>
                <label>Enter your pet's description</label>
                <input type='text' placeholder='Description' value={newPet.description} onChange={handleNewDescription} />

                <br/>
                <label>Enter the last known location description</label>
                <input type='text' placeholder='Location' value={newPet.location} onChange={handleNewLocation} />
                
                <br/>
                <label>Enter the last known date seen</label>
                <input type='text' placeholder='Date' value={newPet.dates} onChange={handleNewDate} />
                
                <br/>
                <label>Enter your neighborhood</label>
                <input type='text' placeholder='Neighborhood' value={newPet.neighborhood} onChange={handleNewNeighborhood} />
                
                <br/>
                <label>Enter the pet's photo</label>
                <input type='text' className="image" placeholder='Photo' value={newPet.photo} onChange={handleNewPhoto} />

                <br/>
                <label>Enter contact information in case your pet goes missing!</label>
                <input type='text' placeholder='Message' value={newPet.missing_message} onChange={handleNewMessage} />

                <Link to="/mypets"><button onClick={addNewPet}>Save</button></Link>
            </form>
      <button ><Link to="/user">Back</Link></button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default InputPet;
