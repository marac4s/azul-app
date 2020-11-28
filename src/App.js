import React from 'react';
import './App.css';
import Plate from './components/Plate';
import Heap from './components/Heap';

const RED = '#ff0000';
const BLUE = '#0000ff';
const GREEN = '#00ff00';

const HEAP_INDEX = -1

export default class App extends React.Component {
  state = {
    plates: [
      [red, blue, green, red],
      [red, blue, green, red],
      [red, blue, green, red]
    ],
    heap: [red, blue, green, red],
    selected: undefined
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
        <Heap
          onTileClickCallback={this.onTileClickCallback}
          index = {heapIndex}
          colors={this.state.heap}
          selected={this.state.selected && this.state.selected.plate === heapIndex && this.state.selected.selectedColor}
        />
        {this.state.plates.map((colors, index) => {
          return (
            <Plate
              onTileClickCallback={this.onTileClickCallback}
              index = {index}
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


