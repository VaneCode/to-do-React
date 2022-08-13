import React from "react"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps}/>
        ))}
      </ul>
    )
  }
}

export default ToDoList