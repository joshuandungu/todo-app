import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo-item">
      <span
        className={`todo-content ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.content}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
