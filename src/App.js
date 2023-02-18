import logo from './logo.svg';
import './App.css';
import React from 'react';
import Benevole from './components/Benevole';
import Jeux from './components/Jeux';
import Relations from'./components/Relations';

function App() {
  return (
      <div>
        <Benevole />
        <Jeux />
        <Relations/>
      </div>
  );
}

export default App;
