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

function* AnimalSaga() {
  yield takeLatest('FETCH_ANIMALS', fetchAnimal);
}

export default AnimalSaga;
