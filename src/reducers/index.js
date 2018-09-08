import {combineReducers} from 'redux'
import reducer from './reducer'
import usersReducer from './usersReducer'
import salePosts from './salePosts'

export default combineReducers({
  reducer,
  usersReducer
})
