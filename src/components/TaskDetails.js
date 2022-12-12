import React, { useContext } from 'react';
import { TodoContext } from './TodoList';

const TaskDetails = ({ task }) => {
    const { removeTask } = useContext(TodoContext);
    return ( 
        <li onClick={() => removeTask(task.id)}>
            <div className='item'>{ task.item }</div>
        </li>
    );
}

export default TaskDetails;