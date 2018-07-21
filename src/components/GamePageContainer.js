import * as React from 'react'
import { connect } from 'react-redux'
import { randomWord, gameFinished, isWinner } from '../lib/game'
import { newGame, makeGuess, resetGuesses } from '../actions/game'
import GamePage from './GamePage'

class GamePageContainer extends React.PureComponent {

  componentDidMount() {
    this.restart()
  }

  restart = () => { 
    this.props.resetGuesses()
    this.props.newGame( randomWord() )
  }

  render() {
    if (!this.props.word) return 'Loading...'
    if (!gameFinished(this.props.word, this.props.letters)) {
      return (<div>
        <GamePage word={this.props.word} letters={this.props.letters} makeGuess={this.props.makeGuess} restart={this.restart} />
      </div>)
    } else {
      return (<div>
        <p><em>  { isWinner(this.props.word, this.props.letters) ? 'You Won!!!' : 'You Lost.' } </em></p>
        <button onClick={this.restart} >Play Again!</button>
      </div>)
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps, { newGame, resetGuesses, makeGuess })(GamePageContainer)
