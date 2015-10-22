import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/profile';
import { Link } from 'react-router';
import AccountDropdown from '../../components/AccountDropdown/AccountDropdown';
import './AccountManager.scss';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.state = {inputMode: false};
  }
  loginClick() {
    console.log('login clicked');
    this.state = {inputMode:true};
  }
  render() {
    if(this.props.currentAccount || this.state.inputMode){
      if(this.state.inputMode){
        return (
          <div className="AccountManager">
            <input placeholder="input"/>
          </div>
        )
      }
      return (<AccountDropdown currentAccount={ this.props.currentAccount } />)
    } else {
      return (
        <div className="AccountManager">
          <a className="AccountManager-Label" href="javascript:void(0)" onClick={ this.loginClick }>Login</a>
        </div>
      )
    }
  }
}
AccountManager.propTypes = {
  currentAccount: PropTypes.object
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
