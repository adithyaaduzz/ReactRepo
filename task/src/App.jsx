
import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("Add a task to get started!");

    const addTask = () => {

        if (task.trim() === "") {
            return;
        }

        setTasks([...tasks, task]);

        setMessage("Task added: " + task + "!");

        setTask("");
    };

    return (
        <div className="container mt-5">

            <div className="card p-4 mb-4">

                <h1
                    className="text-center mb-4"
                    style={{
                        backgroundColor: tasks.length > 0 ? "lightblue" : "white"
                    }}
                >
                    React Task Planner
                </h1>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter task name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={addTask}
                >
                    Add Task
                </button>

            </div>

            <TaskList tasks={tasks} message={message} />

        </div>
    );
}

export default App;
