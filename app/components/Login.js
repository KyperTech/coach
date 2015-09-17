import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import ChildComponent from './child-component/child-component';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('render login');
    return (
      <div>
        Parent
        <ChildComponent currentLocation={ this.props.router.location } />
      </div>
    )
  }
}

Login.propTypes = {
}

function mapStateToProps(state) {
  return {
    router: state.router
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
