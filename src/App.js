import React, { Component } from 'react';
import Tile from './Tile';
import "./style.css";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tiles: [
                {
                    text: 'Yoshi in lava'
                },{
                    text: 'Gets trolled by onescreen puzzle'
                },{
                    text: 'Carl says dickbags'
                },{
                    text: 'Chat spams "one more"'
                },{
                    text: 'Carl does insane kaizo level'
                },{
                    text: 'Carl does fake puke face'
                },{
                    text: 'Carl is super smart with chat (SIENCE!)'
                },{
                    text: 'True ending'
                },{
                    text: 'Carl does a hand-heart'
                },{
                    text: 'SPAAAAAAAAAAAAAAAAAACCCCCCCCCCCEEEEEEEEEEEE'
                },{
                    text: 'Spaghetti everywhere'
                },{
                    text: 'Carl puts epic highfive on screen'
                },{
                    text: 'Death by ghost'
                }

            ]
        }
    }

    render() {
        const tiles = this.state.tiles;
        return (
           <div>
                {tiles.map((tile)=><Tile text={tile.text} />)}
           </div>
        );
    }
}