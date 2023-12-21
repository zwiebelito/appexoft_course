import {ADD_CONTACT, REMOVE_CONTACT} from "./action-types";

export const addTask = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}

export const removeTask = (contact) => {
    return {
        type: REMOVE_CONTACT,
        payload: contact
    }
}