import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import GamePageContainer from './components/GamePageContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ WelcomePage } />
        <Route exact path="/hangman" component={ GamePageContainer } />
      </div>
    );
  }
}

export default App;
