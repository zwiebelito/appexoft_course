/*
import React from 'react';
import {addTask, removeTask} from './action'
import {connect} from "react-redux";

const TodoList = ({tasks, addTask, removeTask}) => {
    const handleAddTask = () => {
        const newTask = prompt('Enter new task')
        addTask({id: Date.now(), text: newTask});
    }

    const handleRemoveTask = (taskId) => {
       removeTask(taskId)
    }

    return (
        <div>
            <ul>
                {tasks.map(task => {
                    const {id, text} = task;
                    return <li key={id}>
                        {text}
                        <button onClick={()=> handleRemoveTask(id)}>Remove task</button>
                    </li>
                })}
            </ul>
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
};

const mapStateProps = (state) => ({
        tasks: state.tasks
    })

export default connect(mapStateProps, {addTask, removeTask})(TodoList)*/
