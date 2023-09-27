import React, { useState } from "react";
import "./Todo.css";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewtodo] = useState([]);
  let id=0;

  const handleChange = (e) => {
    const new_val = e.target.value;
    setNewtodo([...todo, { id: id, task: new_val }]);
  };

  const addTodo = () => {
    const new_id = id + 1;
    
    setTodo(newTodo);
    console.log(newTodo);
    console.log(todo);
  };

  const remove = (id) => {
    console.log("click");

    const updated_todo = todo.filter((item) => item.id !== id);
    console.log(updated_todo);

    setTodo(updated_todo);
    // console.log(item);
  };

  return (
    <div className="todo-body">
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
                onClick={() => addTodo()}
              >
                Add
              </button>
            </form>
          </div>
          {todo.map((item, index) => (
            <div className="added-item" key={item.id}>
              <div className="task">
                {item.task}
                {item.id}
              </div>
              <div className="icons">
                <FaIcons.FaEdit className="edit-icon" />
                <Fa6Icons.FaTrashCan
                  className="delete-icon"
                  onClick={() => remove(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
