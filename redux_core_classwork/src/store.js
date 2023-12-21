import {createStore} from "redux";
import {contactReducer} from "./TodoList/reducers";

const store = createStore(contactReducer)

export default store;