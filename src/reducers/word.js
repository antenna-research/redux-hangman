export default (state = null, action) => {
  switch(action.type) {
  case 'NEW_GAME':
    return action.payload
  default:
    return state
  }
}