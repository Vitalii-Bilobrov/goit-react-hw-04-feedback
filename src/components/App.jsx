import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { useState } from 'react';

// export class App extends Component {
//   static defaultProps = {
//     initialValue: 1,
//   };

//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const option = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = option => {
    const { name } = option.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  // const { good, neutral, bad } = this.state;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(option)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotalFeedback={countTotalFeedback()}
            onPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
