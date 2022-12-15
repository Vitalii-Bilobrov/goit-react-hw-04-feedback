import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import PropTypes from 'prop-types';
import { Feedback } from './Feedback.styled';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <>
        <FeedbackOptions
          onHandleNeutral={this.handleNeutral}
          onHandleGood={this.handleGood}
          onHandleBad={this.handleBad}
        />
        <h1>Statistics</h1>
        <ul>
          <li>
            <span>Good</span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral</span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad</span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total</span>
            <span></span>
          </li>
          <li>
            <span>Positive feedback</span>
            <span></span>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
