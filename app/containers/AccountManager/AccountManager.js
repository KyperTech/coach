import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {has} from 'lodash';
import * as Actions from '../../actions/profile';
import { Link } from 'react-router';
import AccountDropdown from '../../components/AccountDropdown/AccountDropdown';
import './AccountManager.scss';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.state = {};
    if(this.props && has(this.props, 'isOpen')){
      this.state.isOpen =  this.props.isOpen;
    }
  }
  loginClick() {
    console.log('login clicked');
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log('is open status', this.state.isOpen);
  }
  render() {
    if(this.props.currentAccount){
      return (<AccountDropdown currentAccount={ this.props.currentAccount } />)
    } else {
      if(this.state.isOpen){
        return (
          <div className="AccountManager-Open">
            <input placeholder="input"/>
          </div>
        )
      } else {
        return (
          <div className="AccountManager-Closed">
            <a className="AccountManager-Label" href="javascript:void(0)" onClick={ this.loginClick }>Login</a>
          </div>
        )
      }

    }
  }
}
AccountManager.propTypes = {
  currentAccount: PropTypes.object,
  loginData: PropTypes.object,
  isOpen: PropTypes.bool
}

//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    loginData: state.loginData
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountManager);
