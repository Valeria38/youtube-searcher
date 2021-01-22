import { handleActions } from "redux-actions";

import { statuses } from "../../../constants";

import {
  setCurrentVideos,
  setCurrentError,
  setQuery,
  setCurrentStatus,
  setPopularVideos,
  setPopularError,
  setPopularStatus,
  setVideo,
  setVideoError,
  setVideoStatus,
} from "../actions";

const current = {
  query: "",
  videos: [],
  status: statuses.none,
  nextPageToken: "",
  prevPageToken: "",
  error: "",
};

const mostPopular = {
  videos: [],
  status: statuses.none,
  nextPageToken: "",
  prevPageToken: "",
  error: "",
};

const details = {
  data: [],
  status: statuses.none,
};

const searchState = {
  current,
  mostPopular,
  details,
};

const search = handleActions(
  {
    [setCurrentVideos]: (
      state,
      { payload: { videos, nextPageToken, prevPageToken } }
    ) => ({
      ...state,
      current: {
        ...state.current,
        videos,
        nextPageToken,
        prevPageToken,
        status: statuses.success,
      },
    }),
    [setCurrentError]: (state, { payload }) => ({
      ...state,
      current: {
        ...state.current,
        error: payload,
        status: statuses.error,
      },
    }),
    [setCurrentStatus]: (state, { payload }) => ({
      ...state,
      current: {
        ...state.current,
        status: payload,
      },
    }),
    [setQuery]: (state, { payload }) => ({
      ...state,
      current: {
        ...state.current,
        query: payload,
      },
    }),
    [setPopularVideos]: (
      state,
      { payload: { videos, nextPageToken, prevPageToken } }
    ) => ({
      ...state,
      mostPopular: {
        ...state.mostPopular,
        videos,
        nextPageToken,
        prevPageToken,
        status: statuses.success,
      },
    }),
    [setPopularError]: (state, { payload }) => ({
      ...state,
      mostPopular: {
        ...state.mostPopular,
        error: payload,
        status: statuses.error,
      },
    }),
    [setPopularStatus]: (state, { payload }) => ({
      ...state,
      mostPopular: {
        ...state.mostPopular,
        status: payload,
      },
    }),

    [setVideo]: (state, { payload }) => ({
      ...state,
      details: {
        ...state.details,
        data: payload,
        status: statuses.success,
      },
    }),
    [setVideoStatus]: (state, { payload }) => ({
      ...state,
      details: {
        ...state.details,
        status: payload,
      },
    }),
    [setVideoError]: (state, { payload }) => ({
      ...state,
      details: {
        ...state.details,
        error: payload,
        status: statuses.error,
      },
    }),
  },
  searchState
);

export default search;
