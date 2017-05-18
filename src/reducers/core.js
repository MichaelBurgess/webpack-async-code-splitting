const core = (state = null, action) => {
  switch(action.type) {
    case "HOME_SET_MESSAGE":
      console.log("I still know about my async child route's actions");
      return state;
      break;
    default:
      return state;
  }
};

export default {
  core
};