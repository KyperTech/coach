import React, { Component, PropTypes } from 'react';
import './child-component.scss';

class ChildComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text">
        Current route: { this.props.currentRoute }
      </div>
    )
  }
}

ChildComponent.propTypes = {
  currentRoute: PropTypes.string
}

export default ChildComponent;
