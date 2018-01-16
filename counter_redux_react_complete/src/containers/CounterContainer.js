import { connect } from 'react-redux'
import { increase, decrease } from '../actions'
import Counter from '../components/Counter'

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
