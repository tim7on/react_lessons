import React from 'react';
import './App.scss';
import NameForm from './features/components/NameForm';
import FileInput from './features/components/FileInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
        <FileInput />
      </header>
    </div>
  );
}

export default App;
