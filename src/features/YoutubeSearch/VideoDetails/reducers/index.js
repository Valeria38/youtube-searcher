import { handleActions } from "redux-actions";

import { statuses } from "../../../../constants";

import { setVideo, setVideoError, setVideoStatus } from "../actions";

const detailsState = {
  data: [],
  status: statuses.none,
  error: "",
};

const details = handleActions(
  {
    [setVideo]: (state, { payload }) => ({
      ...state,
      data: payload,
      status: statuses.success,
    }),
    [setVideoStatus]: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
    [setVideoError]: (state, { payload }) => ({
      ...state,
      error: payload,
      status: statuses.error,
    }),
  },
  detailsState
);

export default details;
