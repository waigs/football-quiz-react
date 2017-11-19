import React from 'react';
import PropTypes from 'prop-types';

const Result = props => {
  return (
    <p>
      We think you support <strong>{props.quizResult}</strong>
    </p>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
