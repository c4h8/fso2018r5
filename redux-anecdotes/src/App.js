import React from 'react';
import * as actions from './actions';

class App extends React.Component {
  render() {
    const anecdotes = this.props.store.getState()
    const dispatch = this.props.store.dispatch;
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(actions.voteAnecdote(anecdote.id))}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          dispatch(actions.addAnecdote(this.newAnecdote.value));
        }}>
          <div><input type="text" ref={input => this.newAnecdote = input} /></div>
          <input type="submit" value="create" />
        </form>
      </div>
    )
  }
}

export default App