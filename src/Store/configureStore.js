import { createStore, applyMiddleware, combineReducers } from "redux";
import Middleware from "redux-thunk";
import { reducerRepos, reducerActivities } from "../Reducers/Reducers";

export default () => {
  const store = createStore(
    combineReducers({
      repositories: reducerRepos,
      activities: reducerActivities
    }),
    applyMiddleware(
      Middleware
    )
  );
  return store;
};
