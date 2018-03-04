import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import session from "./reducers/session"

export default compose(
    applyMiddleware(thunk)
)(createStore)(combineReducers({ session }));