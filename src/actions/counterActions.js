// RXAction
export const counterIncrement = (param) => ({
  type: 'INCREMENT'
})

export const counterDecrement = (param) => ({
  type: 'DECREMENT'
})

export const counterClear = (param) => ({
  type: 'CLEAR'
})
 
export const counterSet = (receivenumber) => ({
  type: 'SET',
  payload: receivenumber
})


