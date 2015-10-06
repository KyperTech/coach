import React, { Component, PropTypes } from 'react';
import './Coach.scss';

class Coach extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
  }

  render() {
    let focusAreas = this.props.focusAreas.map((focusArea, i) => {
      return <span className="Coach-FocusArea" key={ i }>{ focusArea }</span>
    });
    return (
      <div className="Coach">
        <h2>{ this.props.name }</h2>
        <p>
        { focusAreas }
        </p>
      </div>
    )
  }
}

Coach.propTypes = {
  name: PropTypes.string.isRequired,
  focusAreas: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Coach;
