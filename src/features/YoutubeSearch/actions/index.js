import { createAction } from "redux-actions";

import { statuses, ITEMS_PER_PAGE } from "../../../constants";

import { getQueryString } from "../../../helpers/getQueryString";

export const setStatus = createAction("SET_STATUS");
export const setVideos = createAction("SET_VIDEOS");
export const setError = createAction("SET_ERROR");
export const setQuery = createAction("SET_QUERY");
export const setNextPageToken = createAction("SET_NEXT_PAGE_TOKEN");
export const setPrevPageToken = createAction("SET_PREV_PAGE_TOKEN");

export const getVideos = (query, pageToken) => (dispatch) => {
  if (!query) {
    return;
  }
  dispatch(setStatus(statuses.loading));
  const queryString = getQueryString({
    key: process.env.REACT_APP_API_KEY,
    q: query,
    part: "snippet",
    maxResults: ITEMS_PER_PAGE,
    pageToken,
  });
  fetch(`${process.env.REACT_APP_API_URL}search?${queryString}`)
    .then((res) => res.json())
    .then(({ items, nextPageToken, prevPageToken }) => {
      console.log(nextPageToken, prevPageToken);
      dispatch(setVideos(items));
      dispatch(setNextPageToken(nextPageToken || ""));
      dispatch(setPrevPageToken(prevPageToken || ""));
      // if (!data.items.length) {
      // dispatch(setStatus(statuses.empty));
      // }
    })
    .catch((err) => {
      setError(err);
    });
};
