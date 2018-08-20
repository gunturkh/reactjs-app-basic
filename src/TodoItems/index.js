import React from 'react'
import FlipMove from 'react-flip-move'

const URL = 'https://learn-heroku-deploy.herokuapp.com/'

class TodoItems extends React.Component {
  constructor(props) {
    super(props)
    this.createTasks = this.createTasks.bind(this)
    this.delete = this.delete.bind(this)
  }

  componentDidMount() {
    this.getItem()
  }

  getItem() {
    fetch(URL)
      .then(results => {
        return results.json()
      })
      .then(data => {
        data.todo_lists.forEach(item => {
          this.props.addItem({
            text: item.todo_task,
            key: item.id
          })
        })
      })
  }

  delete (key) {
    this.props.delete(key)
  }

  updateTask (id) {

    fetch(`${URL}${id}`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo_task: this._inputElement.value
      })
    })
  }

  createTasks (item) {
    return <li onDoubleClick={() => this.delete(item.key)} key = {item.key}>{item.text}</li>
  }

  render () {
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTasks)
    
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}

export default TodoItems