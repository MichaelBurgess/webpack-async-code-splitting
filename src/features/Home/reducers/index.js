const home = (state = {
  message: null
}, action) => {
  switch(action.type) {
    case "HOME_SET_MESSAGE":
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default {
  home
};