import React, { useState } from "react";
import "./todo.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // It will Add a task
  const addTask = (e) => {
    // it prevents the Refreshing the page
    e.preventDefault();
    // if task is Empty it will return none
    if (task.trim() === "") return;
    // it adds the tasks to previous tasks
    setTasks([...tasks, { text: task, completed: false }]);
    // after adding the task the input value become empty
    setTask("");
  };

  // Delete a task
  // the index value came from the user clicks on the partcular task
  const deleteTask = (index) => {
    // Here i is not equal to index then it will filter and removes the i
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="heading"> React ToDo List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="tasks-section">
        {/* if tasks length is empty  it will display this line  */}
        {/* Conditional Rendering  */}
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet!</p>
        ) : (
          // otherwise it will display this part of programme
          <ul>
            {tasks.map((item, index) => (
              <li key={index} className="task-item">
                <span>{item.text}</span>
                <div className="btn-group">
                  {/* // whenever clicks on the delete it will delete the particular index value  */}
                  <button onClick={() => deleteTask(index)} className="btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
