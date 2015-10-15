import React, { Component, PropTypes } from 'react';

import './SelectGroup.scss';

import _ from 'lodash';

import Icon from '../icons/Icon';
import CameraIcon from '../icons/Camera';
import PhoneIcon from '../icons/Phone';
import ChatIcon from '../icons/Chat';

class SelectGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      video: false,
      phone: false,
      chat: false
    };
  }

  handleClick(button) {
    this.setState((previousState) => {
      previousState[button] = !previousState[button];
      return previousState;
    }, () => {
      if(this.props && this.props.onChange){
        this.props.onChange(_.keys(_.pick(this.state, _.identity)));
      }
    })
  }

  render() {
    return (
      <div className="SelectGroup">
        <span className="SelectGroup-Label">{ this.props.label }</span>
        <div className="SelectGroup-Buttons">
          <button className="SelectGroup-Button" onClick={ this.handleClick.bind(this, 'video') }>
            <Icon selected={ this.state.video }>
              <CameraIcon />
            </Icon>
          </button>
          <button className="SelectGroup-Button" onClick={ this.handleClick.bind(this, 'phone') }>
            <Icon selected={ this.state.phone }>
              <PhoneIcon />
            </Icon>
          </button>
          <button className="SelectGroup-Button" onClick={ this.handleClick.bind(this, 'chat') }>
            <Icon selected={ this.state.chat }>
              <ChatIcon />
            </Icon>
          </button>
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
