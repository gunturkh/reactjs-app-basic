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
    if (this._inputElement.value !== '')
    {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
    

      this.setState((prevState)=> {
        return {
          items: prevState.items.concat(newItem)
        }
      })

      this._inputElement.value = ''
    }
    console.log(this.state.items)
    
    e.preventDefault()
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
          <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
          <button type="submit">Add</button>
        </form>
        
        <InputText />
      </div>
    )
  }
}

export default App
