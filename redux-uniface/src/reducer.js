import * as types from './actionTypes';

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FEEDBACK_GOOD:
      return {...state, good: state.good + 1};
    case types.FEEDBACK_OK:
      return {...state, ok: state.ok + 1};
    case types.FEEDBACK_BAD:
      return {...state, bad: state.bad + 1};
    case types.RESET_FEEDBACK:
      return initialState
    default:
      return state;
  }
};

export default counterReducer;
