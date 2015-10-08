import React, { Component, PropTypes } from 'react';

import './SelectGroup.scss';

class SelectGroup extends Component {

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
      <div className="SelectGroup">
        <span className="SelectGroup-Label">{ this.props.label }</span>
        <div className="SelectGroup-Buttons">
          <button className="SelectGroup-Button">1</button>
          <button className="SelectGroup-Button">2</button>
          <button className="SelectGroup-Button">3</button>
        </div>
      </div>
    )
  }
}
SelectGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
export default SelectGroup;
