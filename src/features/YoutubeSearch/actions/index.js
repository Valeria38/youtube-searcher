import { createAction } from "redux-actions";

import { statuses, ITEMS_PER_PAGE } from "../../../constants";

import { getQueryString } from "../../../helpers/getQueryString";

export const setCurrentStatus = createAction("SET_STATUS");
export const setCurrentVideos = createAction("SET_VIDEOS");
export const setCurrentError = createAction("SET_ERROR");
export const setQuery = createAction("SET_QUERY");

export const setPopularStatus = createAction("SET_MOST_POPULAR_STATUS");
export const setPopularVideos = createAction("SET_MOST_POPULAR_VIDEOS");
export const setPopularError = createAction("SET_MOST_POPULAR_ERROR");

export const setVideo = createAction("SET_VIDEO");
export const setVideoError = createAction("SET_VIDEO_ERROR");
export const setVideoStatus = createAction("SET_VIDEO_STATUS");

export const getVideos = (query, pageToken) => (dispatch) => {
  if (!query) {
    return;
  }
  dispatch(setCurrentStatus(statuses.loading));
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
      // console.log(nextPageToken, prevPageToken);
      dispatch(
        setCurrentVideos({
          videos: items,
          nextPageToken: nextPageToken || "",
          prevPageToken: prevPageToken || "",
        })
      );
      // if (!data.items.length) {
      // dispatch(setStatus(statuses.empty));
      // }
    })
    .catch((err) => {
      setCurrentError(err);
    });
};

export const getPopularVideos = (pageToken) => (dispatch) => {
  const queryString = getQueryString({
    key: process.env.REACT_APP_API_KEY,
    chart: "mostPopular",
    maxResults: ITEMS_PER_PAGE,
    pageToken,
  });

  dispatch(setPopularStatus(statuses.loading));

  fetch(`${process.env.REACT_APP_API_URL}videos?${queryString}`)
    .then((res) => res.json())
    .then(({ items, nextPageToken, prevPageToken }) => {
      dispatch(
        setPopularVideos({
          videos: items,
          nextPageToken: nextPageToken || "",
          prevPageToken: prevPageToken || "",
        })
      );

      // if (!data.items.length) {
      // dispatch(setStatus(statuses.empty));
      // }
    })
    .catch((err) => {
      setCurrentError(err);
    });
};

export const getVideo = (id) => (dispatch) => {
  dispatch(setVideoStatus(statuses.loading));
  const queryString = getQueryString({
    key: process.env.REACT_APP_API_KEY,
    part: "snippet",
    id,
  });
  fetch(`${process.env.REACT_APP_API_URL}videos?${queryString}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log("data[0]", items[0]);
      dispatch(setVideo(items[0]));
    })
    .catch((err) => {
      setVideoError(err);
    });
};
