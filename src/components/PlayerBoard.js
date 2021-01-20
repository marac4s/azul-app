import React from 'react';
import PatternLines from './PatternLines';

export default class PlayerBoard extends React.Component {

    render() {
        return (
            <div 
                className="PlayerBoard" 
            >
                <PatternLines selected={this.props.selected}/>
            </div>
        );
    }
    
}