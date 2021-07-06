import React from 'react';
import './App.scss';
import NameForm from './components/NameForm';
import FileInput from './components/FileInput';
import ToDoList from './components/todoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <NameForm />
        <FileInput />
      </header>
    </div>
  );
}

export default App;
