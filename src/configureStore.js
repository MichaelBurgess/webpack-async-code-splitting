import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import configureReducers from "./configureReducers";

const configureStore = reducerRegistry => {
  const rootReducer = configureReducers(reducerRegistry.getReducers());
  const store = createStore(
    rootReducer,
    applyMiddleware(logger));

  // Reconfigure the store's reducer when the reducer registry is changed - we
  // depend on this for loading reducers via code splitting and for hot
  // reloading reducer modules.
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers))
  });

  return store
};

export default configureStore;