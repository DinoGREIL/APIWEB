import logo from './logo.svg';
import './App.css';
import React from 'react';
import Benevole from './components/Benevole';
import Jeux from './components/Jeux';
import Relations from'./components/Relations';
import ListJeux from './components/ListJeux';
import ListBenevolebycreneau from './components/ListBenevolebycreneau';
import ListBenevolebyzone from './components/ListBenevolebyzone';

function App() {
  return (
      <div>
        <Benevole />
        <Jeux />
        <Relations/>
        <ListJeux/>
        <ListBenevolebycreneau/>
        <ListBenevolebyzone/>

      </div>
  );
}

export default App;
