import React from 'react';

export default class Tile extends React.Component {
    render() {   
        return (
            <div className="Tile" style={{width: 50 + 'px', height: 50 + 'px', backgroundColor: this.props.color, border:this.props.selected ? '3px solid black' : '0px'}}>
            </div>
        );
    }
}