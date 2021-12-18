import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAnimal(action) {
  // get all movies from the DB
  try {
    console.log(action.payload)
      const animals = yield axios.get(`/api/animals/${action.payload}`);
      console.log('get all:', animals.data);
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

function* AnimalSaga() {
  yield takeLatest('FETCH_ANIMALS', fetchAnimal);
  yield takeLatest( 'ADD_ANIMALS', postAnimal );
}

export default AnimalSaga;
