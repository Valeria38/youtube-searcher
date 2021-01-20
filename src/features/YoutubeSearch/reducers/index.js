import { handleActions } from "redux-actions";

import { statuses } from "../../../constants";

import {
  setVideos,
  setError,
  setQuery,
  setNextPageToken,
  setPrevPageToken,
} from "../actions";

const searchState = {
  videos: [],
  status: statuses.none,
  error: "",
  query: "",
  nextPageToken: "",
  prevPageToken: "",
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
    [setNextPageToken]: (state, { payload }) => ({
      ...state,
      nextPageToken: payload,
    }),
    [setPrevPageToken]: (state, { payload }) => ({
      ...state,
      prevPageToken: payload,
    }),
  },
  searchState
);

export default search;
