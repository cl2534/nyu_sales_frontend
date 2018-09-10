import {combineReducers} from 'redux'
import reducer from './reducer'
import usersReducer from './usersReducer'


export default combineReducers({
  reducer,
  usersReducer
})
