import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AccountManager from '../AccountManager/AccountManager';
import * as Actions from '../../actions';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
  }

  render() {
    // console.log('current account', this.props.account);
    let managerIsOpen = false;
    return (
      <div className="Navbar">
        <Link className="Navbar-Brand" to="/">Coach</Link>
        <div className="Navbar-Spacer"></div>
        <div className="Navbar-Actions">
          <AccountManager currentAccount={ this.props.account } open={ managerIsOpen } />
        </div>
      </div>
    )
  }
}
Navbar.propTypes = {
  account: PropTypes.object
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  console.log('state', state.auth);
let account = state.auth ? state.auth.account : null;
  return {
    account: account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
