import { combineReducers } from "redux";

const configureReducers =  reducers => {
  return combineReducers({
    ...reducers
  })
};

export default configureReducers;