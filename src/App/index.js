import React, { Component } from 'react'
import TodoItems from '../TodoItems'
import logo from '../Logo/solido.png'
import './TodoList.css'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = { 
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  

  handleSubmit(e){
    if (this._inputElement.value !== '') {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.addItem(newItem)
      this._inputElement.value = ''
    }
    e.preventDefault()
  }

  addItem(item) {
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(item) 
      }
    })
    
    
  }



  deleteItem(key) {
    let filteredItems =this.state.items.filter(function (item) {
      return (item.key !== key)
    })

    this.setState({
      items: filteredItems
    })
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
          <h1 className="App-title"></h1>
          <form onSubmit={this.handleSubmit}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <TodoItems entries = {this.state.items} delete = {this.deleteItem} addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App
