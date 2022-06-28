import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import {
    composeWithDevTools
 } from 'redux-devtools-extension';

 import thunk from 'redux-thunk';
 

import userReducer from './UserReducer';

 const Reducers = combineReducers({
     users:userReducer
    
 })

 const midware = [thunk];
 const store = createStore(
     Reducers,
     composeWithDevTools(applyMiddleware(...midware))
 )

 export default store;