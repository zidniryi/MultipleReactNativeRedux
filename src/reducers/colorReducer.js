const initialState = {
    colorText: 'Merah',
    colorBool: false

}

export default (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state, colorText:'Biru', colorBool:true };

  default:
    return state
  }
};
