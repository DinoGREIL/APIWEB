import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Benevole from './components/Benevole';
import Jeux from './components/Jeux';
import Relations from'./components/Relations';
import ListJeux from './components/ListJeux';
import ListBenevolebycreneau from './components/ListBenevolebycreneau';
import ListBenevolebyzone from './components/ListBenevolebyzone';
import Navbar from "./navbarcontainer/Navbar";
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<ListBenevolebyzone/>} />
      <Route path='/Benevole' element={<Benevole/>} />
      <Route path='/Jeu' element={<Jeux/>} />
      <Route path='/Relation' element={<Relations/>} />
      <Route path='/ListJeu' element={<ListJeux/>} />
      <Route path='/parcreneau' element={<ListBenevolebycreneau/>} />
      
    </Routes>
    </Router>
  );
  }
  
  export default App;
  
