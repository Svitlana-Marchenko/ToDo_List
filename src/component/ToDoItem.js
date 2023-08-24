import React, {useState} from 'react';
import '../App.css'

const TodoItem = ({ id, title}) => {
    const [isDone, setIsDone] = useState(false);

    const handleCheckboxChange = () => {
        setIsDone(!isDone);
    };

    return (
        <div className={`todo-item ${isDone ? 'done' : ''}`}>
            <input type="checkbox" checked={isDone} onChange={handleCheckboxChange} />
            <p>{title}</p>
        </div>
    );
};

export default TodoItem;
