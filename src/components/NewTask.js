import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoList';

const NewTask = ({ addTasks }) => {
    const { tasks } = useContext(TodoContext);
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTasks(task);
        setTask('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Adicione nova tarefa...' required value={task}  onChange={(e) => setTask(e.target.value) }/>
            <button id='add' type='submit' >Adicionar</button>
            <p>Você tem tarefas { tasks.length } pendentes...</p>
        </form>
    );
}

export default NewTask;