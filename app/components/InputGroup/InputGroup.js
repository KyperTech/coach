import React, { Component, PropTypes } from 'react';

import './InputGroup.scss';

import uniqueId from 'lodash/utility/uniqueId'

class InputGroup extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @private
   * @function handleChange
   * @description Run the onChange function if it exists
   */
  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    if (this.props.onChange) {
      this.props.onChange(event, value);
    }
  }

  render() {
    if (this.props.type === 'textarea') {
      return (
        <div className="InputGroup">
        <span className="InputGroup-Label">{ this.props.label }</span>
        <textarea
          {...this.props}
          ref="input"
          role="textbox"
          className='InputGroup-Textarea'
          autofocus
          onChange={this.handleChange}
        />
        </div>
      )
    } else {
      return (
        <div className="InputGroup">
          <span className="InputGroup-Label">{ this.props.label }</span>
          <input
            {...this.props}
            key={ uniqueId() }
            className='InputGroup-Input'
            onChange={this.handleChange}
          />
        </div>
      )
    }

  }
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string
}
export default InputGroup;
