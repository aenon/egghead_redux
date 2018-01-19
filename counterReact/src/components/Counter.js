import React from 'react'
import { connect } from 'react-redux'
import { value, increaseValue, resetValue } from '../actions'

const Counter = ({value, onIncrease, onDecrease, onReset}) => (
  <div className="counter">
    <p>React Redux Counter</p>
    <h1>{value}</h1>
    <button onClick={onDecrease}>-</button>
    <button onClick={onIncrease}>+</button>
    <button onClick={onReset}>RESET</button>
  </div>
)

const mapStateToProps = state => ({
  value: state.value
})

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increaseValue(1)),
  onDecrease: () => dispatch(increaseValue(-1)),
  onReset: () => dispatch(resetValue())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
