import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: {
    id: number;
    description: string;
    completed: boolean;
  }[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newDescription: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='todoList'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
