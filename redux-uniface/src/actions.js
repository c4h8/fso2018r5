import * as actionTypes from './actionTypes';

export const rateGood = () => ({
  type: actionTypes.FEEDBACK_GOOD
});

export const rateOk = () => ({
  type: actionTypes.FEEDBACK_OK
});

export const rateBad = () => ({
  type: actionTypes.FEEDBACK_BAD
});

export const resetFeedback = () => ({
  type: actionTypes.RESET_FEEDBACK
});
