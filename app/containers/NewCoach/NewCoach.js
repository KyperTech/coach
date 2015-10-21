import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/profile';
// import './NewCoach.scss';

import InputGroup from '../../components/InputGroup/InputGroup';
import UploadGroup from '../../components/UploadGroup/UploadGroup';
import SelectGroup from '../../components/SelectGroup/SelectGroup';
import AvailabilityGroup from '../../components/AvailabilityGroup/AvailabilityGroup';
import WizardForm from '../../components/WizardForm/WizardForm';
let signupData = {};
class NewCoach extends Component {

  constructor(props) {
    super(props);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.finalStep = this.finalStep.bind(this);
    this.state = {step: 1, signupData:{}};
  }

  handleImageUpload(image) {
    console.log('Image upload:', image);
    // this.setState({
    //   image: image
    // });
  }

  handleInputChange(fieldName, event, value) {
    //TODO: Look into if password should be stored outside of state
    if(value){
      this.state.signupData[fieldName] = value;
    }
    // console.log(`${fieldName} value:`, this.state.signupData[fieldName]);
  }
  updateAvailabilityChange(val) {
    console.log('availability changed:', val);
  }
  nextStep() {
    this.state.step ++;
    this.setState({
      step: this.state.step,
      signupData: this.state.signupData
    });
  }
  previousStep() {
    this.state.step --;
    this.setState({
      step: this.state.step,
      signupData: this.state.signupData
    });
  }
  finalStep() {
    //TODO: Call new coach with data
    this.props.addCoach(this.state.signupData);
  }
  render() {
    switch(this.state.step) {
      case 2:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}  >
            <UploadGroup onDrop={ this.handleImageUpload } label="profile" />
            <InputGroup onChange={ this.handleInputChange.bind(null, 'name') } value={this.state.signupData.name} label="name" />
            <InputGroup onChange={ this.handleInputChange.bind(null, 'focusArea') } value={this.state.signupData.focusArea} label="focus area" />
          </WizardForm>
        )
      case 3:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <InputGroup onChange={ this.handleInputChange.bind(null, 'DOB') } value={this.state.signupData.DOB} label="date of birth" type="date" />
            <SelectGroup label="i'm available for" onChange={ this.props.updateContactMethods } />
            <AvailabilityGroup label="availability" onChange={ this.props.updateAvailability } />
          </WizardForm>
        )
      case 4:
        return (
          <WizardForm onNextClick={ this.finalStep } onPrevClick={this.previousStep} end={ true } linkTo='profile'>
            <InputGroup type="textarea" rows="10" cols="40" label="description of your services" onChange={ this.handleInputChange.bind(null, 'description')} value={this.state.signupData.description} />
          </WizardForm>
        )
      default:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep} start={ true } >
            <InputGroup onChange={ this.handleInputChange.bind(null, 'email') } label="email" value={this.state.signupData.email}/>
            <InputGroup onChange={this.handleInputChange.bind(null, 'password')} label="password" type="password" value={this.state.signupData.description} />
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
    profile: state.profile,
    signupData: state.signupData
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCoach);
