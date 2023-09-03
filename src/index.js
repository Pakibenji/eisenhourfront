import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
import TaskContextProvider from './context/TaskContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TaskContextProvider>
    <App />
    </TaskContextProvider>
);
