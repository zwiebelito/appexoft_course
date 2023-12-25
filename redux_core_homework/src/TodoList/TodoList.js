import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTask, deleteAllTasks, deleteTask} from "./todo-actions";
import {Button, IconButton, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector((state) => state.tasks);

    const handleAddTask= () => {
        const newTask = prompt('Enter new task');
        if (newTask === ''){
            alert('The field is empty, try again')
        } else {
            dispatch(addTask({id: Date.now(), text: newTask}));
        }
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleDeleteAllTasks = () => {
        dispatch(deleteAllTasks());
    };

    return (
        <div>
            <h1 style={{color: 'darkslateblue'}}>TodoList</h1>
            <ul>
                {tasks.map(task => {
                    const {id, text} = task;
                    return <li style={{listStyle: 'counter'}} key={id}>
                        {text}
                        <IconButton aria-label="delete" color="error" onClick={()=> handleDeleteTask(id)} size="small">
                            <DeleteIcon />
                        </IconButton>
                    </li>
                })}
            </ul>
            <Stack direction="row" spacing={2}>
                <Button onClick={handleAddTask} color="success"  size='small' variant="contained">Add task</Button>
                {tasks.length > 0 && <Button onClick={handleDeleteAllTasks} variant="outlined" size="small" color="error" endIcon={<DeleteIcon />}>
                    Delete all tasks
                </Button>}
            </Stack>
        </div>
    );
};

export default TodoList;