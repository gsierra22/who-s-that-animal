import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPets(action) {
  console.log('Petstest')
  // get all movies from the DB
  try {
    //console.log(action.payload)
      const pets = yield axios.get(`/api/pets/mypets/${action.payload}`);
      console.log('get pet:', pets.data);
      yield put({ type: 'SET_PETS', payload: pets.data });

  } catch {
      console.log('get all error');
  }
      
}

function* fetchAll() {
  console.log('testing123')
  // get all movies from the DB
  try {
      const pets = yield axios.get(`/api/pets/all`);
      console.log('get all:', pets);
      yield put({ type: 'SET_PETS', payload: pets.data });

  } catch {
      console.log('get all error');
  }
      
}

function *postPets( action ){
  console.log( 'in *postSaga:', action );
  try {
    const response = yield axios.post('/api/pets', action.payload);
    yield put({type: 'FETCH_PETS', payload: response.data})
  } catch (err) {
      console.log('error:', err);
  }
}

function *removePets( action ){
  console.log( 'in *deleteSaga:', action.payload );
  try {
    const response = yield axios.delete(`/api/delete/${action.payload.id}`);
    yield put({type: 'FETCH_PETS', payload: response.data})
  } catch (err) {
      console.log('error:', err);
  }
}

function* PetSaga() {
  yield takeLatest('FETCH_PETS', fetchPets)
  yield takeLatest('FETCH_ALL', fetchAll);
  yield takeLatest( 'ADD_PETS', postPets );
  yield takeLatest('REMOVE_PETS', removePets)
}

export default PetSaga;
