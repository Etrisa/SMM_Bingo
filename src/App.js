import React, { Component } from 'react';
import Tile from './Tile';
import "./style.css";
import _ from "lodash";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tileTexts: [
                    'Gets trolled by onescreen puzzle',
                    'Stream gets dirty (nauhgty words)',
                    'Chat spams "one more"',
                    'Carl does insane kaizo level',
                    'Carl does fake puke face',
                    'Carl is super smart with chat (SIENCE!)',
                    'True ending',
                    'Carl does a hand-heart',
                    'SPAAAAAAAAAAAAAAAAAACCCCCCCCCCCEEEEEEEEEEEE',
                    'Spaghetti everywhere',
                    'Carl puts epic highfive on screen',
                    'Death by ghost',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26'
            ]
        }
    }

    componentDidMount() {
        console.log(this.props.params);
    }

    renderRow(row) {
        return (
            row.map((t, index) => <Tile key={index} text={t} />)
        )
    }

    render() {
        let tileTexts = this.state.tileTexts;
        tileTexts = _.shuffle(tileTexts);

        let rows = [];
        let row = [];

        for (var i = 0; i <= 25; i++) {
            if (i % 5 === 0 && i !== 0) {
                rows.push(row);
                row = [];
            }
            row.push(tileTexts[i])
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