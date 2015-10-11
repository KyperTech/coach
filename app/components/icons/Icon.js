import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Icon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classes = classnames('Icons', {
      light: this.props.style === 'light',
      dark: this.props.style === 'dark',
      secondary: this.props.style === 'secondary' || this.props.selected
    });
    return (
      <div className={ classes }>
        { this.props.children }
      </div>
    )
  }
}

Icon.propTypes = {
  style: PropTypes.string,
  selected: PropTypes.bool
}

Icon.defaultProps = {
  style: 'dark'
}

export default Icon;
