import React, { Component } from 'react';
import Tile from './Tile';
import "./style.css";
import _ from "lodash";

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
                    text: 'Stream gets dirty (nauhgty words)'
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
                },{
                    text: '14'
                },{
                    text: '15'
                },{
                    text: '16'
                },{
                    text: '17'
                },{
                    text: '18'
                },{
                    text: '19'
                },{
                    text: '20'
                },{
                    text: '21'
                },{
                    text: '22'
                },{
                    text: '23'
                },{
                    text: '24'
                },{
                    text: '25'
                },{
                    text: '26'
                }

            ]
        }
    }


    renderRow(row) {
        return (
            row.map((t, index) => <Tile key={index} text={t.text} />)
        )
    }

    render() {
        let tiles = this.state.tiles;
        tiles = _.shuffle(tiles);

        let rows = [];
        let row = [];

        for (var i = 0; i <= 25; i++) {
            if (i % 5 === 0 && i !== 0) {
                rows.push(row);
                row = [];
            }
            row.push(tiles[i])
        }

        return (
           <div className='appContainer' >
                {
                    rows.map(r => {

                        return <div className='rowContainer' >{this.renderRow(r)}</div>
                    })
                }
           </div>
        );
    }
}