import { combineReducers } from 'redux';
import auth from './auth';
/*
Redux State auth: {
authenticated: string
error: string }
*/
export default combineReducers({ auth });
