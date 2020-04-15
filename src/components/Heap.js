import React from 'react';
import Tile from './Tile';

export default class Heap extends React.Component {
    state = {
        selected: undefined
    };

    onTileClick(color) {
        this.setState((prevState) => ({selected: prevState.selected === color ? undefined : color})); 
    };

    render() {
        return (
            <div 
                className="Heap" 
                style={{width: 300 + 'px', height: 300 + 'px'}}
            >
                {this.props.colors.map((color, index) => {
                    return (
                        <span
                            key={'tile' + index}
                            onClick = {() => this.onTileClick(color)}
                        >
                            <Tile 
                                color={color}
                                selected={color === this.state.selected}
                            />
                        </span>   
                    );
                })}
            </div>
        );
    }
}