
import React from 'react';

function TaskList({ tasks, message }) {

    return (
        <div className="card p-4">

            <h3>My Tasks</h3>

            <ul className="task-list">
                {tasks.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            <p className="message">{message}</p>

        </div>
    );
}

export default TaskList;
