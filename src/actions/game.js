
export function resetGuesses() {
  return {
    type: 'RESET_GUESSES'
  }
}

export function newGame(newWord) {
  return {
    type: 'NEW_GAME',
    payload: newWord
  }
}

export function makeGuess(guess) {
  return {
    type: 'MAKE_GUESS',
    payload: guess
  }
}
