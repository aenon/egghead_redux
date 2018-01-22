import React from 'react'
import { connect } from 'react-redux'
import './App.css'

const toggleHidden = () => ({
  type: 'TOGGLE'
})

const Child = () => (
  <div className='modal'>
    Hello, World!
  </div>
)

const App = ({isHidden, toggleHidden}) => (
  <div className="App">
  <button onClick={toggleHidden} >
    Click to show modal
  </button>
  {!isHidden && <Child />}
  </div>
)

const mapStateToProps = state => ({
  isHidden: state.isHidden
})

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
