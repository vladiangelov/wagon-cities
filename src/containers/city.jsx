import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="active-city">{this.props.city}</div>
    );
  }
}

export default City;
