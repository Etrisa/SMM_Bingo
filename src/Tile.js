import React, { Component } from 'react';

export default class Tile extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }
    
    toggleSelected (){
        this.setState({selected: !this.state.selected})
    }

    render() {
        const style = {backgroundColor: !this.state.selected ? '#ddf9fd' : '#00ff00'}
        const text = this.props.text;

        return(
            <div className='tileContainer' style={style} onClick={() => this.toggleSelected()}>
                <div className='tile' >
                    {text}
                </div>
            </div>
        )
    }
}


