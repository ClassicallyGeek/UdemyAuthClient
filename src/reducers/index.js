import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
/*
Redux State auth: {
authenticated: string
error: string }
*/
export default combineReducers({
  auth,
  form: formReducer
});
