import React from 'react';
import './App.css';
import Plate from './components/Plate';
import Heap from './components/Heap';
import PlayerBoard from './components/PlayerBoard';
import BlueTile from './images/blue.jpg';
import RedTile from './images/red.jpg';
import WhiteTile from './images/white.jpg';
import BlackTile from './images/black.jpg';
import YellowTile from './images/yellow.jpg';

const HEAP_INDEX = -1

// const RED = '#ff0000';
// const BLUE = '#0000ff';
// const GREEN = '#00ff00';

const BLACK = BlackTile;
const YELLOW = YellowTile;
const WHITE = WhiteTile;

const LIST_OF_COLORS = [BLACK, YELLOW, WHITE];
const NUMBER_OF_TILES_PER_COLOR = 4;
const NUMBER_OF_PLATES = 3;

function randomizeTilesAndDistribute() {
  //create a random-sorted array with all the tiles in it
  let totalTiles = [];
  LIST_OF_COLORS.forEach((color) => {
    for (let i = 0; i < NUMBER_OF_TILES_PER_COLOR; i++) {
      totalTiles.push(color);
    };
  });
  totalTiles = shuffle(totalTiles);

  // create an array of empty arrays based on the number of plates
  const groupsOfTiles = [];
  for (let i = 0; i < NUMBER_OF_PLATES; i++) {
    groupsOfTiles.push([]);
  }

  // add tiles on each of the empty arrays
  const tilesPerPlate = Math.ceil(totalTiles.length / NUMBER_OF_PLATES);
  for (let plateIndex = 0; plateIndex < NUMBER_OF_PLATES; plateIndex++) {
    for (let i = 0; i < tilesPerPlate; i++) {
      const tile = totalTiles[i + plateIndex * tilesPerPlate];
      if (!tile) {
        continue;
      } //avoid adding "undefined" values
      groupsOfTiles[plateIndex].push(tile);
    }
  }

  return groupsOfTiles;
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default class App extends React.Component {
  state = {
    plates: [
      [BLACK, YELLOW, WHITE, BLACK],
      [BLACK, YELLOW, WHITE, BLACK],
      [BLACK, YELLOW, WHITE, BLACK]
    ],
    heap: [BLACK, YELLOW, WHITE, BLACK],
    selected: undefined
  }

  onInitGame = () => {
    this.setState(() => {
      return ({
        plates: randomizeTilesAndDistribute(),
        heap: [],
        selected: undefined
      })
    })
  }

  onTileClickCallback = (color, index) => {
    this.setState((prevState) => {
      if (prevState.selected && prevState.selected.selectedColor === color && prevState.selected.plate === index) {
        return ({
          selected: undefined
        })
      } else {
        return ({
          selected: {
            plate: index,
            selectedColor: color
          }
        })
      }
    }, () => { console.log(this.state.selected) })
  }

  // esercizio, non utilizzata mai veramente
  // onTileClickCallback2 = (color) => {
  //   this.setState((prevState) => {
  //     if (prevState.selected && prevState.selected.selectedColor === color && prevState.selected.plate === index) {
  //       return ({
  //         selected: undefined
  //       })
  //     } else {
  //       return ({
  //         selected: {
  //           plate: index,
  //           selectedColor: color
  //         }
  //       })
  //     }
  //   }, () => { console.log(this.state.selected) })
  // }

  render() {
    return (
      <div className="App">
        <PlayerBoard selected={this.state.selected? this.state.selected.selectedColor : undefined}/>
        <button onClick={this.onInitGame}>Cusmalize</button>
        <Heap
          onTileClickCallback={this.onTileClickCallback}
          index={HEAP_INDEX}
          colors={this.state.heap}
          selected={this.state.selected && this.state.selected.plate === HEAP_INDEX && this.state.selected.selectedColor}
        />
        {this.state.plates.map((colors, index) => {
          return (
            <Plate
              onTileClickCallback={this.onTileClickCallback}
              index={index}
              key={'Plate' + index}
              colors={colors}
              selected={this.state.selected && this.state.selected.plate === index && this.state.selected.selectedColor}
            />
          )
        })}
      </div>
    );
  }
}


