import React from 'react';
import'./bootstrap.css';
import './App.css';
import Router from './components/general/Router';
import FooterComponent from './components/general/FooterComponent';

function App() {
  return (
    <div className="App">
        <Router/>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
