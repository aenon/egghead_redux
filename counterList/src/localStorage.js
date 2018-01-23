export const loadState = state => {
  try {
    const serializedState = localStorage.getItem('counterState')
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
    localStorage.setItem('counterState', serializedState)
  } catch (err) {}
}
