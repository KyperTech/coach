import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import './Home.scss';

import Header from '../../components/Header/Header';
import Coaches from '../../components/Coaches/Coaches';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Coaches coaches={ this.props.coaches } />
      </div>
    )
  }
}

//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    coaches: state.coaches
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
