import React, { Component } from 'react'
import Home from './components/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <ul>
          <Home />
        </ul>
      </div>
    )
  }
}