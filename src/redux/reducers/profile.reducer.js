const trackProfile = (state = [], action) => {
  //console.log('track reducer working')
  switch (action.type) {
      case 'SET_PROFILE':
          return action.payload;
      default:
          return state;
  }
  return state;
}


// user will be on the redux state at:
// state.user
export default trackProfile;
