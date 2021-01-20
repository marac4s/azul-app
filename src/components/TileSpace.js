import React from 'react';

export default class TileSpace extends React.Component {

    state = {
        color: undefined
    }

    //credo che al momento attuale sia inutile
    getStatus = (tile) => {
        let className = '';
        if(tile === undefined) {
            className = 'Tile tilespace-empty';
        }
        return className;
    }

    onTileSpaceClick = () => {
        //si chiede se c'è qualcosa di selezionato, se si pone background color = al colore selezionato
        //forse mi faccio le domande sbagliate
        if(this.props.selected && !this.state.color){
            this.setState(() => {
                return ({
                  color: this.props.selected
                })
            });
        }
        
    }

    render() {   
        return (
            <div
                className={this.getStatus(this.props.tile)}
                onClick={this.props.tile === undefined && this.onTileSpaceClick}
                style={{backgroundColor: this.state.color }}
            >
            </div>
        );
    }

}