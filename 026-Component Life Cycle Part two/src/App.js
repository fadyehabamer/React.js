import React, { Component } from 'react'
import Home from './Components/Home'


export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Home x='getDerivedStateFromProps'/>
      </div>
      
    )
  }
}
