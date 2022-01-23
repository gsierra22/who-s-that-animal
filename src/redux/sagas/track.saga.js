import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import store from '../store';

function* fetchProfile (action) {
  console.log('Track saga test', action.payload)
  // get all tracks from the DB
  try {
      const profile = yield axios.get(`/api/track/profile/${action.payload.id}`);
      console.log('get profile data:', profile.data);
      let existingIds = [];
      let newArray=[];
      for( let i=0; i < profile.data.length; i++ ){
        let canAdd = true;
        for( let j=0; j< existingIds.length; j++ ){
            if( profile.data[i].pets_id === existingIds[j] ){
                canAdd = false;
            }
        }
        if( canAdd ){
            newArray.push( profile.data[i] );
            existingIds.push(profile.data[i].pets_id)
        }
        canAdd = false;
    }
    yield put( { type: 'SET_PROFILE', payload: newArray } );

  } catch (err) {
      console.log('get profile error', err);
  }
      
}



function *postTrack( action ){
  //console.log( 'in *postTrack:', action );
  try {
    const response = yield axios.post('/api/track', action.payload);
    yield put({type: 'FETCH_TRACK', payload: store.track})
  } catch (err) {
      console.log('error:', err);
  }
}

function* fetchTrackModal (action) {
  console.log('TrackModal saga test', action.payload)
  // get all tracks from the DB
  try {
      const profile = yield axios.get(`/api/track/trackmodal/${action.payload.id}`);
      console.log('get trackModal data:', profile.data);
    yield put( { type: 'SET_TRACKMODAL', payload: profile.data } );

  } catch (err) {
      console.log('get profile error', err);
  }
      
}


function *removeTrack( action ){
  console.log( 'in the first delete route', action.payload );
  try {
    const response = yield axios.delete(`/api/track/delete/${action.payload.pets_id}?user_id=${action.payload.user_id}`);
    yield put({type: 'FETCH_PROFILE', payload: action.payload})
  } catch (err) {
      console.log('error:', err);
  }
}


function* trackSaga() {
  yield takeLatest('FETCH_PROFILE', fetchProfile);
  yield takeLatest( 'ADD_TRACK', postTrack );
  yield takeLatest('REMOVE_TRACK', removeTrack)
  yield takeLatest('FETCH_TRACKMODAL', fetchTrackModal)
}

export default trackSaga;
