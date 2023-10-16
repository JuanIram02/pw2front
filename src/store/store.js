import{composeWithDevTools}from'redux-devtools-extension';
import{combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';

const rootReducer=combineReducers({ 
    auth: authReducer//we access the properties of the reducer
}); //combines all the reducers from the application

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)) 
); //We create the store and pass it the rootReducer, and the compose
//withDevTools a we will have access to it in google chrome
// the middleware thingy will allows us the async calls in our actions

export default store;