import React from 'react';
import './App.scss';
import NameForm from './features/components/NameForm';
import FileInput from './features/components/FileInput';
import ToDoList from './features/components/todoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
        <FileInput />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
