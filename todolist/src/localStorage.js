export const loadState = state => {
  try {
    const serializedState = localStorage.getItem('todoListState')
    if (serializedState === null) {
      return state
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return state
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todoListState', serializedState)
  } catch (err) {}
}
