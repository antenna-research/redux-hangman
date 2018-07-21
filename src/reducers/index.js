import { combineReducers } from 'redux'
import word from './word'
import letters from './letters'

export default combineReducers({
  word,
  letters
})