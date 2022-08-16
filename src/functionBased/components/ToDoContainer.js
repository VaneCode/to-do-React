/* eslint-disable react/destructuring-assignment */
/* eslint no-param-reassign: "error" */
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SinglePage from "../pages/SinglePage";
import Header from "./Header";
import InputToDo from "./InputToDo";
import ToDoList from "./ToDoList";
import SinglePage from "../pages/SinglePage";

const ToDoContainer = () => {
  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    console.log("test run");

    // getting stored items
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
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
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      />
      <Route path="/SinglePage" element={<SinglePage />} />
    </Routes>
  );
};
export default ToDoContainer;
