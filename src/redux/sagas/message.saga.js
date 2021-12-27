import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import store from '../store';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMessage(action) {
  console.log('Track saga test')
  // get all movies from the DB
  try {
    //console.log(action.payload)
      const message = yield axios.get(`/api/message/message`);
      console.log('get track:', message.data);
      yield put({ type: 'SET_MESSAGE', payload: message.data });

  } catch (err) {
      console.log('get message error', err);
  }
      
}



function* messageSaga() {
  yield takeLatest('FETCH_MESSAGE', fetchMessage)
}

export default messageSaga;
