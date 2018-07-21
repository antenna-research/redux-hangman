import { combineReducers } from 'redux'
import word from './word'
import letters from './letters'

// The Redux state should contain: 
// the word being guessed
// all the letters guessed so far.
export default combineReducers({
  word,
  letters
})