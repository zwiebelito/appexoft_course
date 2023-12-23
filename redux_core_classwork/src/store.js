import {createStore} from "redux";
import {contactReducer, rootReducers, todoReducer} from "./TodoList/reducers";

const store = createStore(rootReducers)

export default store;