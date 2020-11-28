import React from 'react';

export default class Tile extends React.Component {
    render() {   
        return (
            <div 
                className={`Tile ${this.props.selected ? 'shaking' : ''}`}
                style={{backgroundColor: this.props.color }}>
            </div>
        );
    }
}