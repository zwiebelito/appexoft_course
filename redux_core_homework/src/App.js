import React from 'react';
import TodoList from "./TodoList/TodoList";
import ContactList from "./ContactList/ContactList";

const App = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60vh'}}>
            <TodoList />
            <ContactList />
        </div>
    );
};

export {App};