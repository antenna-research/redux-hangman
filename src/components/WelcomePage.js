import * as React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage(props) {
  return (<div>
    <h1>Welcome to Hangman</h1>
    <Link to="/hangman">Start playing!</Link>
  </div>)
}