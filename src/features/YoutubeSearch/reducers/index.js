import { handleActions } from "redux-actions";

import { statuses } from "../../../constants";

import { setVideos, setError, setQuery } from "../actions";

const searchState = {
  videos: [],
  status: statuses.none,
  // total: 0,
  error: "",
  query: "",
};

const search = handleActions(
  {
    [setVideos]: (state, { payload }) => ({
      ...state,
      videos: payload,
      status: statuses.success,
    }),
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload,
      status: statuses.error,
    }),
    [setQuery]: (state, { payload }) => ({
      ...state,
      query: payload,
    }),
  },
  searchState
);

export default search;
