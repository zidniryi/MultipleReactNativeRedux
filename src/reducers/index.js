import { combineReducers } from "redux";
import counterReducer from './counterReducer'
import helloReducer from './helloReducer';
import coloReducer from './colorReducer';

export default combineReducers({
    counter: counterReducer,
    hello: helloReducer,
    color: coloReducer
})