/* eslint-disable react/destructuring-assignment */
/* eslint no-param-reassign: "error" */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((previousState) => ({
      todos: [...previousState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((previousState) => ({
      todos: [...previousState.todos, newTodo],
    }));
  };

  setUpdate = (updatedTitle, id) => {
    this.setState((previousState) => ({
      todos: previousState.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addTodoProps={this.addTodoItem} />
          <ToDoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default ToDoContainer;
