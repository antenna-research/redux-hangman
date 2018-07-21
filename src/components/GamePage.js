import * as React from 'react'
import { showGuess, wrongGuessCount } from '../lib/game'

// string  showGuess(word, guesses)
// int     wrongGuessCount(word, guesses)

export default function GamePage(props) {

  const handleChange = (event) => {
    const value = event.target.value
    if (value.length > 0) {
      props.makeGuess(value[0])
    }
    event.target.value = ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (<div>
      <h3>{ showGuess( props.word, props.letters ) }</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="letter" onChange={handleChange} />
        </label>
      </form>
      <h4> Wrong guesses so far: { wrongGuessCount( props.word, props.letters ) } </h4>
      <button onClick={props.restart} >Play Again!</button>
  </div>)
/*
There should be a button to create a new game. When you click it, an action of type `NEW_GAME` should be dispatched.
The result should be that a new random word is selected and the guesses are reset/emptied.
*/
}