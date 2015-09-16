import React, { Component, PropTypes } from 'react';
import './cars.scss';

class Cars extends Component {
  constructor() {
    super();
    this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click');
    this.props.onCarAddClick({
      name: 'tesla',
      hp: 400
    });
  }

  render() {
    let cars = this.props.cars.map((car, i) => {
      return <li key={ i }>{ car.name } - { car.hp }</li>
    })
    return (
      <div>
        { cars }
        <button onClick={ this.handleClick }>Add tesla</button>
      </div>
    )
  }
}

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired
  })).isRequired,
  onCarAddClick: PropTypes.func.isRequired
};

export default Cars;
