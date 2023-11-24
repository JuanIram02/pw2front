import{composeWithDevTools}from'redux-devtools-extension';
import{combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import chatReducer from './reducers/chatReducer';
import roomReducer from './reducers/roomReducer';
import friendsReducer from './reducers/friendsReducer';
import usersReducer from './reducers/usersReducer';
import groupsReducer from './reducers/groupsReducer';

const rootReducer=combineReducers({ 
    auth: authReducer,//we access the properties of the reducer
    alert: alertReducer,
    friends: friendsReducer,
    users: usersReducer,
    chat: chatReducer,
    groups:groupsReducer,
    room:roomReducer,
}); //combines all the reducers from the application

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)) 
); //We create the store and pass it the rootReducer, and the compose
//withDevTools a we will have access to it in google chrome
// the middleware thingy will allows us the async calls in our actions

export default store;