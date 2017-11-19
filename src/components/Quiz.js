import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import CounterQuiz from './CounterQuiz';
import OptionsAnswers from './OptionsAnswers';

const Quiz = props => {
  const renderOptionsAnswers = key => {
    return (
      <OptionsAnswers
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        quizId={props.quizId}
        selectedAnswer={props.selectedAnswer}
      />
    );
  };

  return (
    <div className="grid-x grid-margin-x">
      <div className="quiz large-6">
        <CounterQuiz counter={props.quizId} total={props.quizTotal} />
        <Question headline={props.question} />
        <ul className="no-bullet">
          {props.optionsAnswers.map(renderOptionsAnswers)}
        </ul>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  optionsAnswers: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  quizId: PropTypes.number.isRequired,
  quizTotal: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.func.isRequired
};

export default Quiz;
