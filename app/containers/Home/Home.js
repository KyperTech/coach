import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/coach';
import './Home.scss';
import _ from 'lodash';
import Header from '../../components/Header/Header';
import Coaches from '../../components/Coaches/Coaches';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.searchCoaches = this.searchCoaches.bind(this);
  }
  searchCoaches(query) {
    console.log('searching coaches...', query, this.props);
    return this.props.searchCoaches(query);
  }
  render() {
    return (
      <div className="Home">
        <Header onSearchSubmit={ this.searchCoaches}/>
        <Coaches coaches={ this.props.coaches } />
      </div>
    )
  }
}

//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    coaches: state.coaches,
    account: state.account,
    coaches: state.coaches
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
