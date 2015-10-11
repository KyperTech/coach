import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';

import './UploadGroup.scss';

class UploadGroup extends Component {

  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      imageUrl: ''
    }
  }

  handleDrop(files) {
    this.setState({
      imageUrl: files[0].preview
    });
    this.props.onDrop(files[0]);
  }

  render() {
    return (
      <div className="UploadGroup">
        <span className="UploadGroup-Label">{ this.props.label }</span>
        <Dropzone className="UploadGroup-Drop" onDrop={ this.handleDrop } multiple={ false } >
          <img className="UploadGroup-Image" src={ this.state.imageUrl || "http://placehold.it/100X100" } />
        </Dropzone>
      </div>
    )
  }
}
UploadGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onDrop: PropTypes.func
}
export default UploadGroup;
