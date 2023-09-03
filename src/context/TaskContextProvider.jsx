// un context pour les tâches
import { createContext, useState } from 'react';

export const TaskContext = createContext();

export default function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useState(null);

    function refreshTasksState(data) {
        setTasks(data);
    }


    return (
        <TaskContext.Provider value={{tasks, refreshTasksState}}>
            {children}
        </TaskContext.Provider> 
    )
}
