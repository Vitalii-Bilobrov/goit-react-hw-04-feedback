import React from 'react';
import { PropTypes } from 'prop-types';

export const Statistics = ({
  onNeutral,
  onGood,
  onBad,
  onTotalFeedback,
  onPositiveFeedbackPercentage,
}) => (
  <>
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

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
