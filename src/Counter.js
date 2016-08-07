import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCount || 0
    }
  }

  

  buttonClicked() {
    this.setState({
      counter: this.state.counter+1
    })
  }

  foobar() {
    return (
      <div>
        My asas
      </div>
    )
  }

  render() {
  	const {counter} = this.state;
    const {initialText} = this.props;
    return (
    	<div>
        {this.foobar()}
       <button onClick={() => this.buttonClicked()}>{initialText}</button>
       {counter}
      </div>
    );
  }
}

Counter.defaultProps = {initialText: 'Knappfan'}