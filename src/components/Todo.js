import React from 'react';

const Todo = ({text, compete, toggleComplete, deleteTodo}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{textDecoration: compete ? "line-through" : ""}} onClick={toggleComplete}>{text}</div>
            <button onClick={deleteTodo}>x</button>
        </div>
    )
}

export default Todo;