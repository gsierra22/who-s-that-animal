import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAnimal(action) {
  console.log('animaltest')
  // get all movies from the DB
  try {
    //console.log(action.payload)
      const animals = yield axios.get(`/api/animals/mypets/${action.payload}`);
      console.log('get animal:', animals.data);
      yield put({ type: 'SET_ANIMALS', payload: animals.data });

  } catch {
      console.log('get all error');
  }
      
}

function* fetchAll() {
  console.log('testing123')
  // get all movies from the DB
  try {
      const animals = yield axios.get(`/api/animals/all`);
      console.log('get all:', animals);
      yield put({ type: 'SET_ANIMALS', payload: animals.data });

  } catch {
      console.log('get all error');
  }
      
}

function *postAnimal( action ){
  console.log( 'in *postSaga:', action );
  try {
    const response = yield axios.post('/api/animals', action.payload);
    yield put({type: 'FETCH_ANIMALS', payload: response.data})
  } catch (err) {
      console.log('error:', err);
  }
}

function *removeAnimal( action ){
  console.log( 'in *postSaga:', action.payload );
  try {
    const response = yield axios.delete(`/api/animals/${action.payload.id}`);
    yield put({type: 'FETCH_ANIMALS', payload: response.data})
  } catch (err) {
      console.log('error:', err);
  }
}

function* AnimalSaga() {
  yield takeLatest('FETCH_ANIMALS', fetchAnimal)
  yield takeLatest('FETCH_ALL', fetchAll);
  yield takeLatest( 'ADD_ANIMALS', postAnimal );
  yield takeLatest('REMOVE_ANIMALS', removeAnimal)
}

export default AnimalSaga;
