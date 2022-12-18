import React from 'react';

const Statistics = ({
  onNeutral,
  onGood,
  onBad,
  onTotalFeedback,
  onPositiveFeedbackPercentage,
}) => (
  <>
    <h1>Statistics</h1>
    <ul>
      <li>
        <span>Good:</span>
        <span>{onGood}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{onNeutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{onBad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{onTotalFeedback}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{onPositiveFeedbackPercentage} %</span>
      </li>
    </ul>
  </>
);
export default Statistics;
