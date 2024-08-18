import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    description: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newDescription: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const handleEdit = () => {
    const newDescription = prompt('Edit Todo', todo.description);
    if (newDescription) {
      editTodo(todo.id, newDescription);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.description}
      </span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
