import React from 'react';
import {RouterProvider} from "react-router";
import router from "./router";

const App = () => {
    return (
        <div>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </div>
    );
};

export {App};