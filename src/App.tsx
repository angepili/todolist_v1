import React from 'react';
import './App.css';

import TodoApp from './TodoMain/TodoApp';
import TodoForm from './TodoMain/TodoForm';
import TodoList from './TodoMain/TodoList';

function App() {
  return <TodoApp>
      <TodoForm />
      <TodoList />
    </TodoApp>;
}

export default App;
