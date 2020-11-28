import React from 'react';
import Tile from './Tile';

export default class Heap extends React.Component {

    onTileClick(color) {
        this.props.onTileClickCallback(color, this.props.index);
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
                                selected={color === this.props.selected}
                            />
                        </span>   
                    );
                })}
            </div>
        );
    }
}