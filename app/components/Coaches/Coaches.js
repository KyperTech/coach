import React, { Component, PropTypes } from 'react';
import './Coaches.scss';

import Coach from '../Coach/Coach';

class Coaches extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
  }

  render() {
    let coaches = this.props.coaches.map((coach, i) => {
      return <Coach key={ i } name={ coach.name } focusAreas={ coach.focusAreas } />
    })
    return (
      <div>
        { coaches }
      </div>
    )
  }
}

Coaches.propTypes = {
  coaches: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    focusAreas: PropTypes.array.isRequired
  }))
};

export default Coaches;
