import React from 'react';
import PropTypes from 'prop-types';

const CounterQuiz = props => {
  return (
    <small>
      Question {props.counter} of {props.total}
    </small>
  );
};

CounterQuiz.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default CounterQuiz;
