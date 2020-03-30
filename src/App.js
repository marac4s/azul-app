import React from 'react';
import './App.css';
import Tile from './components/Tile';
import Plate from './components/Plate';

function App() {
  return (
    <div className="App">
      <Tile color={red}/>
      <Plate colors={[red, blue, green]}/>
    </div>
  );
}

export default App;

const red = '#ff0000';
const blue = '#0000ff';
const green = '#00ff00';