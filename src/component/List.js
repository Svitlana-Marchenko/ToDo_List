import React from 'react';
import TodoItem from './ToDoItem';

const List = ({ items}) => {
    return (
        <div>
            {items.map((item) => (
                <TodoItem  id={item.id} title={item.title}/>
            ))}
        </div>
    );
};

export default List;
