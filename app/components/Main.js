import React, { Component } from 'react';

import ChildComponent from './child-component/child-component';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Parent
        <ChildComponent />
      </div>
    )
  }
}


export default Main;
