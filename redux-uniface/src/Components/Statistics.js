import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

const Statistics = ({good, ok, bad, resetFeedback}) => {
  const ratings = good + ok + bad;
  const positive = Number((100*(good + ok)) / ratings).toFixed(1);
  const mean = Number((good - bad) / ratings).toFixed(2);

  console.log(good, ok ,bad);

  if (ratings === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{mean}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{`${positive} %`}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={resetFeedback}>nollaa tilasto</button>
    </div >
  )
}

export default connect(state => state, actions)(Statistics);
