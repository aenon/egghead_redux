import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions'

const CounterContainer = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button> 
    <button onClick={onIncrement}>+</button>
  </div>
)

const mapStateToProps = (state) => ({
  value: state
})

// if dispatch() called in actions, the action function 
// can be put into connect()
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increase())
  },
  onDecrement: () => {
    dispatch(decrease())
  }
})

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)

export default Counter