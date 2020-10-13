import React from 'react';
import './App.css';

import TodoApp from './TodoMain/TodoApp';
import TodoBar from './TodoMain/TodoBar';
import TodoForm from './TodoMain/TodoForm';
import TodoList from './TodoMain/TodoList';

function App() {
  return <TodoApp>
      <TodoBar />
      <TodoForm />
      <TodoList />
    </TodoApp>;
}

export default App;
