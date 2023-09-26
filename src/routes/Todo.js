import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewtodo] = useState([]);

  const handleChange = (e) => {
    const new_val = e.target.value;
    setNewtodo([...todo, { task: new_val }]);
    // e.preventDefault();
  };

  const addTodo = (e) => {
    // let update = [...todo];
    // update = [...todo, newTodo];
    setTodo(newTodo);
    console.log(newTodo);
    console.log(todo);
    // e.preventDefault();
  };
  return (
    <div className="todo-body">
      <img src="" />
      <div className="card transparent-card">
        <h5 className="card-header">Todo-List</h5>
        <div className="card-body">
          <h5 className="card-title">Add your tasks to do!!</h5>

          <div className="form-body">
            <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={handleChange}
                className="todo-input"
              ></input>
              <button
                type="button"
                className="todo-btn"
                onClick={(e) => addTodo(e)}
              >
                Add
              </button>
            </form>
          </div>
          {newTodo.map((item) => (
            <p className="added-item">{item.task}</p>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Todo;
