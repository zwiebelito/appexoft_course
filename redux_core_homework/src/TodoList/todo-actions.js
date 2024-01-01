export const CREATE_TASK = "CREATE_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const DELETE_ALL_TASKS = "DELETE_ALL_TASKS"

export const addTask = (task) => {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const deleteTask = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}

export const deleteAllTasks = () => {
    return {
        type: DELETE_ALL_TASKS
    }
}