import React, { Component } from 'react';
import update from 'immutability-helper';
import quizQuestions from '../data/quizQuestions';
import Quiz from './Quiz';
import Result from './ResultQuiz';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      quizId: 1,
      question: '',
      optionsAnswers: [],
      answer: '',
      answersCount: {
        'Manchester Utd': 0,
        'Newcastle Utd': 0,
        'West Brom': 0
      },
      result: ''
    };

    this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
  }

  componentWillMount() {
    const randomAnswers = quizQuestions.map(question =>
      this.randomArray(question.answers)
    );

    this.setState({
      question: quizQuestions[0].question,
      optionsAnswers: randomAnswers[0]
    });
  }

  randomArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleSelectedAnswer(event) {
    this.showUserAnswer(event.currentTarget.value);

    if (this.state.quizId < quizQuestions.length) {
      setTimeout(() => this.showNextQuestion(), 200);
    } else {
      setTimeout(() => this.showResults(this.getResults()), 200);
    }
  }

  showUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  showNextQuestion() {
    const counter = this.state.counter + 1;
    const quizId = this.state.quizId + 1;

    this.setState({
      counter: counter,
      quizId: quizId,
      question: quizQuestions[counter].question,
      optionsAnswers: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  showResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'No support' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        optionsAnswers={this.state.optionsAnswers}
        quizId={this.state.quizId}
        question={this.state.question}
        quizTotal={quizQuestions.length}
        selectedAnswer={this.handleSelectedAnswer}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="grid-container">
        <h1 className="headline">Which team do you support?</h1>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
