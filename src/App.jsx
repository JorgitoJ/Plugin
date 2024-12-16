import React from 'react';
import Button from './components/button';
import Icon from './components/icon';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación React con Vite</h1>
      <Button text="Haz clic aquí" />
      <Icon />
    </div>
  );
}

export default App;
