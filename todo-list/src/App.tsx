import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//css
import './App.css';
interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (description: string) => {
    const newTodo = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newDescription: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, description: newDescription } : todo
    ));
  };

  return (
    <div className='container montserrat-text'>
      
      <h1 className='playwrite'>Rose Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
