import {ADD_TASK, REMOVE_TASK} from "./action-types";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = (task) => {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}