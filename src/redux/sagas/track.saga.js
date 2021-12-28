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

function* fetchProfile (action) {
  console.log('Track saga test')
  // get all movies from the DB
  try {
    console.log(action.payload)
      const profile = yield axios.get(`/api/track/profile/${action.payload}`);
      console.log('get track:', profile.data);
      yield put({ type: 'SET_PROFILE', payload: profile.data });

  } catch (err) {
      console.log('get profile error', err);
  }
      
}



function *postTrack( action ){
  //console.log( 'in *postTrack:', action );
  try {
    const response = yield axios.post('/api/track', action.payload);
    yield put({type: 'FETCH_TRACK', payload: store.track.id})
  } catch (err) {
      console.log('error:', err);
  }
}


function* trackSaga() {
  yield takeLatest('FETCH_TRACK', fetchTrack)
  yield takeLatest('FETCH_PROFILE', fetchProfile);
  yield takeLatest( 'ADD_TRACK', postTrack );
  // yield takeLatest('REMOVE_PETS', removePets)
}

export default trackSaga;
