const deletePets = (state = [], action) => {
  switch (action.type) {
      case 'SET_DELETE':
          return action.payload;
      default:
          return state;
  }
  return state;
}


// user will be on the redux state at:
// state.user
export default deletePets;
