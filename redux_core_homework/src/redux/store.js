import {combineReducers, createStore} from "redux";
import {contactReducer, todoListReducer} from "./reducers";

export const rootReducer = combineReducers({
    contacts: contactReducer,
    tasks: todoListReducer
});

export const store = createStore(rootReducer)