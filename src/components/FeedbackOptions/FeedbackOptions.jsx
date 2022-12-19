import React from 'react';
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        name={option}
        key={option}
        type="button"
        onClick={e => onLeaveFeedback(e)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
