import { COLOR_PRESSED } from '../actions/types';
const initialState = {
    colorText: 'Merah',
    colorBool: false

}

export default (state = initialState, action) => {
  switch (action.type) {

  case COLOR_PRESSED:
    return { ...state, colorText:'Biru', colorBool:true };

  default:
    return state
  }
};
