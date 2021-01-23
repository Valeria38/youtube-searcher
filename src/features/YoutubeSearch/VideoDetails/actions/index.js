import { createAction } from "redux-actions";

import { statuses } from "../../../../constants";

import { getQueryString } from "../../../../helpers/getQueryString";

export const setVideo = createAction("SET_VIDEO");
export const setVideoError = createAction("SET_VIDEO_ERROR");
export const setVideoStatus = createAction("SET_VIDEO_STATUS");

export const getVideo = (id) => (dispatch) => {
  dispatch(setVideoStatus(statuses.loading));
  const queryString = getQueryString({
    key: process.env.REACT_APP_API_KEY,
    part: "snippet,statistics",
    id,
  });
  fetch(`${process.env.REACT_APP_API_URL}videos?${queryString}`)
    .then((res) => res.json())
    .then(({ items }) => {
      if (!items.length) {
        throw new Error("Invalid token");
      }
      dispatch(setVideo(items[0]));
    })
    .catch((err) => {
      dispatch(setVideoError(err.message));
    });
};
