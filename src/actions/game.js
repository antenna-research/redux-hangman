export const RESET_GUESSES = 'RESET_GUESSES'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function resetGuesses() {
  return {
    type: RESET_GUESSES
  }
}

export function newGame(newWord) {
  return {
    type: NEW_GAME,
    payload: newWord
  }
}

export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}
