import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Profile from '../../actions/profile';
// import './NewCoach.scss';

import InputGroup from '../../components/InputGroup/InputGroup';
import UploadGroup from '../../components/UploadGroup/UploadGroup';
import SelectGroup from '../../components/SelectGroup/SelectGroup';
import AvailabilityGroup from '../../components/AvailabilityGroup/AvailabilityGroup';
import WizardForm from '../../components/WizardForm/WizardForm';
import TextGroup from '../../components/TextGroup/TextGroup';
class NewCoach extends Component {

  constructor(props) {
    super(props);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.state = {step: 1};
  }

  handleImageUpload(image) {
    console.log(image);

  }

  handleEmailChange(email) {

  }

  handlePasswordChange(password) {
    console.log('password');

  }

  nextStep() {
    console.log('nextStep called');
    this.state.step ++;
    console.log('stepped forward 1', this.state);
    this.setState({
      step: this.state.step
    });
  }
  previousStep() {
    console.log('previousStep called');
    this.state.step --;
    console.log('stepped back 1', this.state);
    this.setState({
      step: this.state.step
    });
  }
  render() {
    console.log('this.state:', this.state);
    switch(this.state.step) {
      case 1:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep} start={ true } >
            <InputGroup onChange={ this.handleEmailChange } label="email" />
            <InputGroup onChange={ this.handlePasswordChange } label="password" type="password" />
          </WizardForm>
        )
      case 2:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}  >
            <UploadGroup onDrop={ this.handleImageUpload } label="profile" />
            <InputGroup onChange={ this.props.updateName } label="name" />
            <InputGroup onChange={this.props.updateFocusAreas } label="focus area" />
          </WizardForm>
        )
      case 3:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <InputGroup onChange={this.props.updateDOB } label="date of birth" type="date" />
            <SelectGroup label="i'm available for" onChange={ this.props.updateContactMethods } />
            <AvailabilityGroup label="availability" onChange={ this.props.updateAvailability } />
          </WizardForm>
        )
      case 4:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep} end={ true } linkTo='profile'>
            <TextGroup label="description of your services" onChange={ this.props.updateServiceDescription } />
          </WizardForm>
        )
      default:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep} start={ true } >
            <InputGroup onChange={ this.handleEmailChange } label="email" />
            <InputGroup onChange={this.handlePasswordChange} label="password" type="password" />
          </WizardForm>
        )
    }
  }
}
NewCoach.propTypes = {

}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    profile: state.profile
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Profile, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCoach);
