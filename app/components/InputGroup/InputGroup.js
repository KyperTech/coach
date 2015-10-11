import React, { Component, PropTypes } from 'react';

import './InputGroup.scss';

class InputGroup extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className="InputGroup">
        <span className="InputGroup-Label">{ this.props.label }</span>
        <input className="InputGroup-Input" onChange={this.handleChange} type={ this.props.type || 'text' } />
      </div>
    )
  }
}
InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string
}
export default InputGroup;
