import React from 'react';
import Statistics from './Statistics';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.props.rateGood}>hyvä</button>
        <button onClick={this.props.rateOk}>neutraali</button>
        <button onClick={this.props.rateBad}>huono</button>
        <Statistics />
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(App);
