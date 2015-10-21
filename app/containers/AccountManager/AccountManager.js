import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/coach';
import { Link } from 'react-router';
import AccountDropdown from '../AccountDropdown/AccountDropdown';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
  }

  render() {
    if(this.props.currentAccount){
      return (<AccountDropdown currentAccount={ this.props.currentAccount } />)
    } else {
      return (<div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>)
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
