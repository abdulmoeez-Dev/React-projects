import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndexNumber, setEditIndexNumber] = useState(null);

  // Add Todo
  const addTodo = () => {
    if (todoValue.trim().length < 3) {
      alert("Please enter at least 3 characters!");
      return;
    }
    setTodos([todoValue, ...todos]); 
    setTodoValue(""); 
  };

  // Delete All
  const deleteAll = () => {
    setTodos([]);
  };

  // Delete Single
  const deleteTodo = (indexNumber) => {
    const newTodos = todos.filter((_, i) => i !== indexNumber);
    setTodos(newTodos);
  };

  // Edit start
  const editHandler = (indexNumber) => {
    setEditIndexNumber(indexNumber);
    setEditInputValue(todos[indexNumber]);
  };

  // Save after edit
  const saveHandler = (indexNumber) => {
    const updatedTodos = [...todos];
    updatedTodos[indexNumber] = editInputValue;
    setTodos(updatedTodos);
    setEditIndexNumber(null); 
    setEditInputValue("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TODO APP</h1>

      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Type your task..."
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.btnPrimary}>
          Add Todo
        </button>
        <button onClick={deleteAll} className={styles.btnDanger}>
          Delete All
        </button>
      </div>

      <ul className={styles.todoList}>
        {todos.map((value, index) =>
          editIndexNumber === index ? (
            <li key={index} className={styles.todoItem}>
              <input
                type="text"
                placeholder="Edit task..."
                onChange={(e) => setEditInputValue(e.target.value)}
                value={editInputValue}
                className={styles.input}
              />
              <button
                onClick={() => saveHandler(index)}
                className={styles.btnPrimary}
              >
                Save
              </button>
            </li>
          ) : (
            <li key={index} className={styles.todoItem}>
              <span>{value}</span>
              <div className={styles.btnGroup}>
                <button
                  onClick={() => editHandler(index)}
                  className={styles.btnSecondary}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className={styles.btnDanger}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;
