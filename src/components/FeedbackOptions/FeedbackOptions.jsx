import React from 'react';
import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  onHandleNeutral,
  onHandleGood,
  onHandleBad,
}) => (
  <div>
    <button type="button" onClick={onHandleGood}>
      Good
    </button>
    <button type="button" onClick={onHandleNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onHandleBad}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onHandleNeutral: PropTypes.func,
  onHandleGood: PropTypes.func,
  onHandleBad: PropTypes.func,
};
