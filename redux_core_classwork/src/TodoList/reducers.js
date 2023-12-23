import {ADD_TASK, REMOVE_TASK} from "./action-types";
import {ADD_CONTACT, REMOVE_CONTACT} from "../Contact/action-types";
import {combineReducers} from "redux";

const initialState = {
    tasks: [],
    contacts: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task)=> task.id !== action.payload)
            };
        default:
            return state
    }
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.tasks, action.payload]
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                tasks: state.contacts.filter((contact)=> contact.id !== action.payload)
            };
        default:
            return state
    }
}

const rootReducers = combineReducers({
    contacts: contactReducer,
    tasks: todoReducer
})

export {rootReducers}