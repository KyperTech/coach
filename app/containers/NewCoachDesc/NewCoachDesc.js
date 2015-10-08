import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../../actions';

// import './NewCoachDesc.scss';

import WizardForm from '../../components/WizardForm/WizardForm';
import TextGroup from '../../components/TextGroup/TextGroup';

class NewCoachDesc extends Component {

  constructor(props) {
    super(props);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }
  handleDescChange(e) {
    console.log('description changed:', e.target.value);
  }
  nextClick() {
    console.log('next this:', this);
    // window.location.assign('/login');
  }
  render() {
    return (
      <WizardForm onNextClick={ this.nextClick }>
        <TextGroup label="description of your services" />
      </WizardForm>
    )
  }
}
NewCoachDesc.propTypes = {

}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCoachDesc);
