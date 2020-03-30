import React from 'react';
import Tile from './Tile';

export default class Plate extends React.Component {
    render() {
        return (
            <div className="Plate" style={{width: 300 + 'px', height: 300 + 'px'}}>
                {this.props.colors.map((color) => {
                    return (
                        <Tile color={color}/>
                    );
                })}
            </div>
        );
    }
}