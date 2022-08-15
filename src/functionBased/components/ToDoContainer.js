/* eslint-disable react/destructuring-assignment */
/* eslint no-param-reassign: "error" */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('test run');

    // getting stored items
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  const handleChange = (id) => {
    setTodos((prevState) => ({
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
    setTodos((previousState) => ({
      todos: [...previousState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((previousState) => ({
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
};
export default ToDoContainer;
