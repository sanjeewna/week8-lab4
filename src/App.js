// src/App.js
import React from 'react';
import Toolbar from './Toolbar';
import Button from './Button';
import Toolbar2 from './Toolbar2';

function App() {
  return (
    <div className="App">
      <h1>Reading Props in Event Handlers</h1>
      <Toolbar />
      <h1>React Events Lab</h1>
      <Button />
      <h1>Passing Event Handlers as Props</h1>
      <Toolbar2 />
      
    </div>
  );
}

export default App;