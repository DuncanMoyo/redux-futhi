import {createStore, combineReducers} from 'redux'
import counteReducer from './reducers/counterReducer'

const rootReducer = combineReducers({
  ctr: counteReducer
})

const store = createStore(rootReducer)

export default store