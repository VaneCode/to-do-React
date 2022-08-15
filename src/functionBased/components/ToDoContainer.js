/* eslint-disable react/destructuring-assignment */
/* eslint no-param-reassign: "error" */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

const ToDoContainer = () =>{

  const[todos, setState] = useState([]);
 
  const handleChange = (id) => {
    setState((prevState) => ({
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

  const delTodo = (id) => {
    setState((previousState) => ({
      todos: [...previousState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState((previousState) => ({
      todos: [...previousState.todos, newTodo],
    }));
  };

  const setUpdate = (updatedTitle, id) => {
    setState((previousState) => ({
      todos: previousState.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    }));
  };

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addTodoProps={addTodoItem} />
          <ToDoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    );
}
export default ToDoContainer;
