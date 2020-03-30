import React from 'react';

export default class Tile extends React.Component {
    state = {
        Selected: false
    };

    render() {
        return (
            <div className="Tile" style={{width: 50 + 'px', height: 50 + 'px', backgroundColor: this.props.color}}>
            </div>
        );
    }
}