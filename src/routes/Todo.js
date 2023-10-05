import React, { useEffect, useState } from "react";
import "./Todo.css";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import about from "../images/about.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Todo = () => {
  // const axios = require("axios");
  const { v4: uuidv4 } = require("uuid");
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const { logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    try {
      const fetch = async () => {
        const response = await axios.get("http://localhost:3001/api");
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
    const addVal = {
      id: new_id,
      task: value,
      completed: false,
      editing: false,
    };
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
  };

  const changeEdit = (id) => {
    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.editing = true;
      }
      return item;
    });
    setTodo(new_todo);
  };

  const edit = (id) => {
    const new_todo = todo.map((item) => {
      if (item.id == id) {
        item.editing = false;
        item.task = value;
      }
      return item;
    });

    try {
      const change = async () => {
        const response = await axios.patch(
          `http://localhost:3001/api/todos/${id}`,
          { task: value }
        );
      };
      change();
      setTodo(new_todo);
    } catch (err) {
      console.log(`error occured${err}`);
    }
  };

  return (
    <div className="todo-container">
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
