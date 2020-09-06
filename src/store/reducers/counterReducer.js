import {ADDITION, SUBTRACTION, DECREMENT, INCREMENT} from '../types'

const defaultState = {
  counter: 0
}

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT: 
    return {
      ...state,
      counter: state.counter + 1
    }
    case DECREMENT:
      return {
        ...state,
      counter: state.counter - 1
      }
    case SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value
      }
      case ADDITION:
        return {
          ...state,
          counter: state.counter + action.value
        }
  }
  return state
}

export default counterReducer
