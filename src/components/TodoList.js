import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo-list">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <p className="no-todos">No tasks to display!</p>
      )}
    </div>
  );
};

export default TodoList;
