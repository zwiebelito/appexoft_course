import {CREATE_CONTACT, DELETE_ALL_CONTACTS, DELETE_CONTACT} from "../ContactList/contact-actions";
import {CREATE_TASK, DELETE_ALL_TASKS, DELETE_TASK} from "../TodoList/todo-actions";

const initialState = {
    tasks: [],
    contacts: []
}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case DELETE_ALL_TASKS:
            return {
                ...state,
                tasks: [],
            };
        default:
            return state;
    }
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload),
            };
        case DELETE_ALL_CONTACTS:
            return {
                ...state,
                contacts: [],
            };
        default:
            return state;
    }
};