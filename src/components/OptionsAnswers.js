import React from 'react';
import PropTypes from 'prop-types';

const OptionsAnswers = props => {
  return (
    <li>
      <input
        type="radio"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.selectedAnswer}
      />
      <label htmlFor={props.answerType}>{props.answerContent}</label>
    </li>
  );
};

OptionsAnswers.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.func.isRequired
};

export default OptionsAnswers;
