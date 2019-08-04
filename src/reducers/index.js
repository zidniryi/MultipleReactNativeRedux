import { combineReducers } from "redux";
import counterReducer from './counterReducer'
import helloReducer from './helloReducer';

export default combineReducers({
    counter: counterReducer,
    hello: helloReducer
})