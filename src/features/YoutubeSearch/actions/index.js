import { createAction } from "redux-actions";

import { statuses } from "../../../constants";

export const setStatus = createAction("SET_STATUS");
export const setVideos = createAction("SET_VIDEOS");
export const setError = createAction("SET_ERROR");
export const setTotal = createAction("SET_TOTAL");
export const setQuery = createAction("SET_QUERY");

export const getVideos = () => (dispatch) => {
  dispatch(setStatus(statuses.loading));
  // fetch(`${process.env.API_URL}/search/repositories?q=${query}&page=${page}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     dispatch(setReposData({ query, page, data: data.items }));
  //     dispatch(setTotal(data.total_count));
  //     if (!data.items.length) {
  //       dispatch(setStatus(statuses.empty));
  //     }
  //   })
  //   .catch((err) => {
  //     setReposError(err);
  //   });
};
