export const ACTIVITIES_REQ = "ACTIVITIES_REQ";
export const ACTIVITIES_RES = "ACTIVITIES_RES";
export const REPOSITORIES_REQ = "REPOSITORIES_REQ";
export const REPOSITORIES_RES = "REPOSITORIES_RES";

export const activitiesfetching = () => {
  return {
    type: ACTIVITIES_REQ,
    fetching: true
  };
};

export const activitiesReceived = json => {
  return {
    type: ACTIVITIES_RES,
    ACTIVITIES: json,
    fetching: false,
    receivedAt: Date.now()
  };
};

export const reposfetching = () => {
  return {
    type: REPOSITORIES_REQ,
    fetching: true
  };
};

export const reposReceived = json => {
  return {
    type: REPOSITORIES_RES,
    repositories: json,
    fetching: false,
    receivedAt: Date.now()
  };
};

export const fetchACTIVITIESFromAPI = () => {
  return dispatch => {
    dispatch(activitiesfetching());
    return fetch(`https://api.github.com/users/${sessionStorage.getItem('name')}/events`)
      .then(
        res => res.json(),
        err => console.log(err)
      )
      .then(json => {
        dispatch(activitiesReceived(json));
      });
  };
};

export const fetchRepositoriesFromAPI = () => {
  return dispatch => {
    dispatch(reposfetching());
    return fetch(`https://api.github.com/users/${sessionStorage.getItem('name')}/repos`)
      .then(
        res => res.json(),
        err => console.log(err)
      )
      .then(json => {
          dispatch(reposReceived(json))
      }
      );
  };
};
