import React, { Component } from 'react'
import logo from '../Logo/logo.svg'
import './index.css'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    alert('Clicked')
    // this.add()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="input" name="Name"/>
        <button type="button" onClick={this.handleClick}> Send </button>
      </div>
    )
  }
}

export default App
