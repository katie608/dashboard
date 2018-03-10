import React from 'react';
import PropTypes from 'prop-types';

export default class StatText extends React.Component {

  render() {
    return (
      <div className="stat-text">
        <span className="title">{this.props.title}</span>
        <span className="value">{this.props.children}</span>
      </div>
    )
  }

}

StatText.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};