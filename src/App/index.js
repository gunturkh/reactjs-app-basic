import React, { Component } from 'react'
import TodoItems from '../TodoItems'
import ButtonModern from '../ButtonModern'
import logo from '../Logo/solido.png'
import './TodoList.css'

const URL = 'https://learn-heroku-deploy.herokuapp.com/'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = { 
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.postItem = this.postItem.bind(this)
  }
  

  handleSubmit(e){
    if (this._inputElement.value !== '') {
      this.postItem()
      this._inputElement.value = ''
    }
    e.preventDefault()
  }
  
  postItem() {
    fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo_task: this._inputElement.value
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        fetch(`${URL}`)
          .then(results => {
            return results.json()
          })
          .then(data => {
            const newData = data.todo_lists
            const newId = newData[newData.length-1].id
            const newTask = newData[newData.length-1].todo_task
            let newItem = {
              text: newTask,
              key: newId
            }
            this.addItem(newItem)
          })
      })
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

    fetch(`https://learn-heroku-deploy.herokuapp.com/${key}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
            <ButtonModern name={'Add'}/>
          </form>
        </header>
        <TodoItems entries = {this.state.items} delete = {this.deleteItem} addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App
