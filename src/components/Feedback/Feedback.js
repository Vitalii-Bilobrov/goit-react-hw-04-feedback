import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
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
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
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
        <Statistics
          onNeutral={this.state.neutral}
          onGood={this.state.good}
          onBad={this.state.bad}
          onTotalFeedback={this.countTotalFeedback()}
          onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Counter;
