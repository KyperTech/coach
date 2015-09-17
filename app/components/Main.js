import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import ChildComponent from './child-component/child-component';
import Cars from './cars/cars';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('render main');
    return (
      <div>
        Parent
        <ChildComponent currentLocation={ this.props.router.location } />
        <Cars cars={ this.props.cars } onCarAddClick={ car => this.props.addCar(car) } />
        { this.props.children }
      </div>
    )
  }
}

Main.propTypes = {
  cars: PropTypes.array
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    router: state.router
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
