import React from 'react';
import PropTypes from 'prop-types';
import StatText from './stat-text';

export default class WindInfo extends React.Component {

  render() {
    return (
      <div className="wind-info">
        <StatText title="Direction">{this.props.direction}&deg;</StatText>
        <StatText title="Speed">{this.props.speed} knots</StatText>
      </div>
    )
  }

}

WindInfo.propTypes = {
  direction: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};