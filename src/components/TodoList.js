import React, { useState, createContext } from 'react';
import NewTask from './NewTask';
import TaskDetails from './TaskDetails';

export const TodoContext = createContext();

const TodoList = (props) => {
    const [tasks, setTasks] = useState([
        {item: 'varrer a casa', id: 1 },
        {item: 'comprar remédio', id: 2 },
        {item: 'levar o cachorro no veterinário', id: 3 },
    ])
    const addTasks = (item) => {
        setTasks([...tasks, { item, id: 4 }])
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    return ( 
        <TodoContext.Provider value={{ tasks, addTasks, removeTask }}>
            { props.children }
            <div className='list'>
                <h1>To-do List</h1>
                <NewTask addTasks={addTasks}/>
                <ul>
                    {tasks.map(task => {
                        return ( <TaskDetails li task={task} key={task.id}>{task.item}</TaskDetails> )
                    })}
                </ul>
            </div>
            </TodoContext.Provider>
    );
}

export default TodoList;