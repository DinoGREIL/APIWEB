import logo from './logo.svg';
import './App.css';
import React from 'react';
import Benevole from './components/Benevole';
import Jeux from './components/Jeux';
import Relations from'./components/Relations';
import ListJeux from './components/ListJeux';

function App() {
  return (
      <div>
        <Benevole />
        <Jeux />
        <Relations/>
        <ListJeux/>
      </div>
  );
}

export default App;
