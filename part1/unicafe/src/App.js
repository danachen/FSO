import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text} 
  </button>
) 

const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)

const Statistics = ({good, neutral, bad}) => {
  const calculateAverage = () => {
    if (good || neutral || bad) {
      return (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
    }
  }

  const calculatePositive = () => {
    if (good || neutral || bad) {
      return good / (good + neutral + bad) * 100 + '%';
    }
  }

  if (!good && !neutral & !bad) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr><td><StatisticLine text="good" value ={good} /></td></tr>
            <tr><td><StatisticLine text="neutral" value ={neutral} /></td></tr>
            <tr><td><StatisticLine text="bad" value ={bad} /></td></tr>
            <tr><td>average {calculateAverage()}</td></tr>
            <tr><td>positive {calculatePositive()}</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() => setGood(good + 1)} text="good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text="bad"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App