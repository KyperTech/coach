import React, { Component, PropTypes } from 'react';

// import './TextGroup.scss';
class TextGroup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  selectDate(index) {
    console.log('index selected:', index);
  }
  render() {
    return (
      <div className="TextGroup">
        <span className="InputGroup-Label">{ this.props.label }</span>
        <textarea rows="10" cols="30" autofocus placeholder="" onChange={this.handleChange}/>
      </div>
    )
  }
}
TextGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
export default TextGroup;
