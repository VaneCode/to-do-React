import React from "react"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <ToDoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
        />
        ))}
      </ul>
    )
  }
}

export default ToDoList