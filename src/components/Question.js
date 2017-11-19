import React from 'react';
import PropTypes from 'prop-types';

const Question = props => {
  return (
    <p className="lead">
      <strong>{props.headline}</strong>
    </p>
  );
};

Question.propTypes = {
  headline: PropTypes.string.isRequired
};

export default Question;
