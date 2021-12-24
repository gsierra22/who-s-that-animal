const trackReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_TRACK':
          return action.payload;
      default:
          return state;
  }
  return state;
}


// user will be on the redux state at:
// state.user
export default trackReducer;
