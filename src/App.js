import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar'
import Weatherdisplay from './components/Weatherdisplay'
import Musicplayer from './components/Musicplayer'

const App = ({weather, tracks}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">CRJ Weather App</h1>
      </header>
      <Searchbar />
      <div className="App-content">
        <Weatherdisplay weather={weather} />
        <Musicplayer tracks={tracks} />
      </div>
    </div>
  );
};

export default App;
