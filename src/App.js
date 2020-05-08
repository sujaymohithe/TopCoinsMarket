import React from 'react';
import './App.css';
import MainRouter from './MainRouter';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRouter />
    </div>
  );
}

export default App;
