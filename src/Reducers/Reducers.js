import {ACTIVITIES_REQ, ACTIVITIES_RES,REPOSITORIES_REQ, REPOSITORIES_RES} from "../Actions/Actions";

const defaultAct = {
  activities: [],
  fetching: false,
  requestedAt: ""
};

const defaultRepos = {
  repositories: [],
  fetching: false,
  requestedAt: ""
};

export const reducerActivities = (state = defaultAct, action) => {
  switch (action.type) {
    case ACTIVITIES_REQ:
      return {
        ...state,
        fetching: action.fetching
      };
    case ACTIVITIES_RES:
      return {
        ...state,
        activities: action.ACTIVITIES,
        fetching: action.fetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};

export const reducerRepos = (state = defaultRepos, action) => {
  switch (action.type) {
    case REPOSITORIES_REQ:
      return {
        ...state,
        fetching: action.fetching
      };
    case REPOSITORIES_RES:
      return {
        ...state,
        repositories: action.repositories,
        fetching: action.fetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};
