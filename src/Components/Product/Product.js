import React, { Component } from 'react';

export default class Product extends Component {

  state = {
    clicked: 0,
  };

  render() {
    var product = this.props.product;

    return (
      <p onClick={this.handleClick}>{product.name}</p>
    );
  }

  handleClick = () => {
    var state = this.state;
    state.clicked++;
    console.log('* I was clicked', state.clicked);
    this.setState(state);
  };
}
