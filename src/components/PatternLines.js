import React from 'react';
import TileSpace from './TileSpace';

export default class PatternLines extends React.Component {


    render() {
        return (
            <div 
                className="PatternLines"
            >
                <div className="h-flex-container">
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                </div>
                    <div className="h-flex-container">
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                </div>
                <div className="h-flex-container">
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                </div>
                <div className="h-flex-container">
                    <div className="flex-cell cell-1of5"/>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                </div>
                <div className="h-flex-container">
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                    <div className="flex-cell cell-1of5">
                        <TileSpace selected={this.props.selected}/>
                    </div>
                </div>
            </div>
        );
    }
}