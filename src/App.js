// App.js
import React, { useState, useEffect } from 'react';
import List from './component/List';
import './App.css'


function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: new Date().getTime().toString(), title: name };
        setList([...list, newItem]);
        setName('');
    };

    const clearItem = () => {
        setList([]);
    };

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    return (
        <div className="app-container">
            <h3 className="todo-list-label">TODO List</h3>
            <div className="app-content">
                <form onSubmit={handleSubmit} className="todo-form">
                    <input
                        type="text"
                        placeholder="e.g. homework"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
                {list.length > 0 && (
                    <div className="todo-list-items">
                        <List items={list} />
                        <button className="clear-button" onClick={clearItem}>
                            Clear Items
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
