import { PRESSED_HELLO_BUTTON } from "../actions/types";

const initialState = {
  helloText: 'Hello World',
  pressButton: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case PRESSED_HELLO_BUTTON:
    return {...state, pressButton: true, helloText: 'Kamu menekan tombol'}
  default:
    return state
  }
};
