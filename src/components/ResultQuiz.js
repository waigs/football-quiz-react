import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const Result = props => {
  return (
    <CSSTransitionGroup
      className="quiz large-6"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.quizId}>
        <p className="text-center">
          We think you support <strong>{props.quizResult}!</strong>
        </p>
      </div>
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
