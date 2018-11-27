import * as actionTypes from './actionTypes';

export const voteAnecdote = id => ({
  type: actionTypes.VOTE_ANECDOTE,
  id
});

export const addAnecdote = anecdote => ({
  type: actionTypes.ADD_ANECDOTE,
  anecdote
});
