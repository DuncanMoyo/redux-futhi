import {createStore, combineReducers} from 'redux'
import counteReducer from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counteReducer
})

const store = createStore(rootReducer)

export default store