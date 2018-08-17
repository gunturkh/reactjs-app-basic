import React from 'react'

class TodoItems extends React.Component {
  createTasks (item) {
    return <li key = {item.key}>{item.text}</li>
  }


  render () {
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTasks)

    return (
      <ul className="theList">
        {listItems}
      </ul>

    )
  }
}

export default TodoItems