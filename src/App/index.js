import React, { Component } from 'react'
import InputText from '../InputText'
import logo from '../Logo/logo.svg'
import './index.css'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = { 
      items: []
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem(e) {

  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SOLIDO</h1>
        </header>
        <form onSubmit={this.addItem}>
          <input placeholder="Enter Task"></input>
          <button type="submit">Add</button>
        </form>
        
        <InputText />
      </div>
    )
  }
}

export default App
