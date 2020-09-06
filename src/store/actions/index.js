import {ADDITION, SUBTRACTION, INCREMENT, DECREMENT} from '../types'

export const incrementAction = () => {
  return {
    type: INCREMENT
  }
};

export const decrementAction = () => {
  return {
    type: DECREMENT
  }
}

export const additionAction = (value) => {
  return {
    type: ADDITION,
    value: value
  }
}

export const subtractionAction = (value) => {
  return {
    type: SUBTRACTION, 
    value: value
  }
}
