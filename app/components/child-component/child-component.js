import React, { Component } from 'react';
import './child-component.scss';

class ChildComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text">
        Child
      </div>
    )
  }
}

export default ChildComponent;
