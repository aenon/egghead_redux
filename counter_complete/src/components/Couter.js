import React from 'react'

const Counter = () => (
  <div>
    <h1>ValueHere</h1>
    <button onClick={increment}>
      +
    </button>
    {' '}
    <button onClick={decrement}>
      -
    </button>
  </div>
)


export default Counter

// dispatch({ type: 'INCREMENT' })
