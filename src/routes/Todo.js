import React, { useEffect, useState } from "react";
import "./Todo.css";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import about from "../images/about.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const { logout, user, isAuthenticated } = useAuth0();
  //To create unique ids
  const { v4: uuidv4 } = require("uuid");

  //Fetch data
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3001/api");
      setTodo(response.data);
    };
    fetch();
  }, []);

  //Function to store value entered in input form
  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  //Function to add to list
  const addTodo = () => {
    let new_id = uuidv4();
    const addVal = {
      id: new_id,
      task: value,
      completed: false,
      editing: false,
    };

    const add = async () => {
      const response = await axios.post(
        "http://localhost:3001/api/todos",
        addVal
      );
    };
    add();
    setTodo([...todo, addVal]);
  };

  //Function to remove from list
  const remove = (id) => {
    const deleted_todo = todo.filter((item) => item.id !== id);
    const del = async () => {
      const response = await axios.delete(
        `http://localhost:3001/api/todos/${id}`
      );
    };
    setTodo(deleted_todo);
    del();
  };

  //Function to mark task as completed or not
  const changeCompleted = (id) => {
    const change = async () => {
      const response = await axios.put(`http://localhost:3001/api/todos/${id}`);
    };

    change();

    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(new_todo);
  };

  //Function to set edited data
  const changeEdit = (id) => {
    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.editing = true;
      }
      return item;
    });
    setTodo(new_todo);
  };

  //Function to set if form is getting edited or not
  const edit = (id) => {
    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.editing = false;
        item.task = value;
      }
      return item;
    });

    const change = async () => {
      const response = await axios.patch(
        `http://localhost:3001/api/todos/${id}`,
        { task: value }
      );
    };
    change();
    setTodo(new_todo);
  };

  return (
    <div className="todo-container">
      <Link to="/">
        <h1 className="home-link">Portfolio.</h1>
      </Link>

      {isAuthenticated && <h1 className="lead welcome">Welcome {user.name}</h1>}
      <button
        className="todo-btn  logout"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
      <div className="todo-body">
        <img src={about} className="bg-image" />

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
            {todo.map((item, index) => {
              if (item.editing === true) {
                return (
                  <div className="pack" key={item.id}>
                    <input
                      type="text"
                      defaultValue={item.task}
                      className="edit-item"
                      onChange={handleChange}
                    ></input>
                    <button onClick={() => edit(item.id)} className="edit-btn">
                      Edit
                    </button>
                  </div>
                );
              } else {
                return (
                  <div className={"added-item "} key={item.id}>
                    <div
                      onClick={() => changeCompleted(item.id)}
                      className={`task ${item.completed ? "completed" : ""}`}
                    >
                      {item.task}
                    </div>
                    <div className="icons">
                      <FaIcons.FaEdit
                        onClick={() => changeEdit(item.id)}
                        className="edit-icon"
                      />
                      <Fa6Icons.FaTrashCan
                        className="delete-icon"
                        onClick={() => remove(item.id)}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
