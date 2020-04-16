import React from 'react';
import './App.css';
import Plate from './components/Plate';
import Heap from './components/Heap';

const red = '#ff0000';
const blue = '#0000ff';
const green = '#00ff00';

export default class App extends React.Component {
  state ={
    plates: [
      [red, blue, green, red],
      [red, blue, green, red],
      [red, blue, green, red]
    ],
    heap: [red, blue, green, red],
    selected: undefined
  }

  render() {
    return (
      <div className="App">
        <Heap colors={this.state.heap}/>
        {this.state.plates.map((colors, index) =>{
          return(
            <Plate 
              callback= {(color) =>{
                this.setState((prevState) =>{
                  if(prevState.selected && prevState.selected.selected === color && prevState.selected.plate === index) {
                    return ({
                      selected: undefined
                    })
                  } else {
                    return ({
                      selected: {
                        plate: index,
                        selected: color
                      }
                    })
                  }
                }, () => {console.log(this.state.selected)})
              }
            }
              key= {'Plate' + index}
              colors={colors}
              selected= {this.state.selected && this.state.selected.plate === index && this.state.selected.selected}
            />
          )
        })}
      </div>
    );
  }
}


