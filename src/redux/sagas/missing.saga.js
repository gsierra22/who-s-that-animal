import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import store from '../store';

// worker Saga: will be fired on "FETCH_MISSING" actions
function* fetchMissing(action) {
  console.log('Track saga test')
  // get all missing pets from the DB
  try {
    //console.log(action.payload)
      const missing = yield axios.get(`/api/missing`);
      console.log('get track:', missing.data);
      yield put({ type: 'SET_MISSING', payload: missing.data });

  } catch (err) {
      console.log('get missing error', err);
  }
      
}



function* missingSaga() {
  yield takeLatest('FETCH_MISSING', fetchMissing)
}

export default missingSaga;
