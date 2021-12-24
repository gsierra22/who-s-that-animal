import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import store from '../store';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTrack(action) {
  console.log('Track saga test')
  // get all movies from the DB
  try {
    //console.log(action.payload)
      const track = yield axios.get(`/api/track/tracker/${action.payload}`);
      console.log('get track:', track.data);
      yield put({ type: 'SET_TRACK', payload: track.data });

  } catch (err) {
      console.log('get track error', err);
  }
      
}


// function *postPets( action ){
//   console.log( 'in *postSaga:', action );
//   try {
//     const response = yield axios.post('/api/pets', action.payload);
//     yield put({type: 'FETCH_PETS', payload: store.user.id})
//   } catch (err) {
//       console.log('error:', err);
//   }
// }

// function *removePets( action ){
//   console.log( 'in *deleteSaga:', action.payload );
//   try {
//     const response = yield axios.delete(`/api/pets/delete/${action.payload}`);
//     yield put({type: 'FETCH_PETS', payload: store.user.id})
//   } catch (err) {
//       console.log('error:', err);
//   }
// }

function* trackSaga() {
  yield takeLatest('FETCH_TRACK', fetchTrack)
  // yield takeLatest('FETCH_ALL', fetchAll);
  // yield takeLatest( 'ADD_PETS', postPets );
  // yield takeLatest('REMOVE_PETS', removePets)
}

export default trackSaga;
