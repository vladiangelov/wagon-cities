import React, { Component } from 'react';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      this.props.cities.map((city) => {
        return <City city={city.name} key={city.name} />;
      })
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
