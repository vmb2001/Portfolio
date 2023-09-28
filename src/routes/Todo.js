import React, { useEffect, useState } from "react";
import "./Todo.css";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const Todo = () => {
  const { v4: uuidv4 } = require("uuid");
  const [todo, setTodo] = useState([]);
  // const [newTodo, setNewtodo] = useState([]);
  const [value, setValue] = useState("");
  // const [idCounter, setIdcounter] = useState(1);

  useEffect(() => {
    try {
      const fetch = async () => {
        const response = await axios.get("http://localhost:3001/api");
        console.log("fetched");
        setTodo(response.data);
      };
      fetch();
    } catch (err) {
      console.log(`error${err}`);
    }
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const addTodo = () => {
    let new_id = uuidv4();
    const addVal = { id: new_id, task: value, completed: false };
    try {
      const add = async () => {
        const response = await axios.post(
          "http://localhost:3001/api/todos",
          addVal
        );
      };
      add();
      setTodo([...todo, addVal]);
    } catch (err) {
      console.log(`error${err}`);
    }
  };
  //   setTodo([...todo, { id: -1, task: value, status: "not completed" }]);
  // else setTodo([...todo, { task: value, status: "not completed" }]);

  const remove = (id) => {
    const deleted_todo = todo.filter((item) => item.id !== id);
    try {
      const del = async () => {
        const response = await axios.delete(
          `http://localhost:3001/api/todos/${id}`
        );
      };
      setTodo(deleted_todo);
      del();
    } catch (err) {
      console.log(`error${err}`);
    }
  };

  const changeCompleted = (id) => {
    try {
      const change = async () => {
        const response = await axios.put(
          `http://localhost:3001/api/todos/${id}`
        );
      };

      change();
    } catch (err) {
      console.log(`error${err}`);
    }
    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(new_todo);
    // console.log(todo);
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
              <div
                onClick={() => changeCompleted(item.id)}
                className={`task ${item.completed == true ? "completed" : ""}`}
              >
                {item.task}
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
