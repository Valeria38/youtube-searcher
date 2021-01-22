import { createSelector } from "reselect";

const search = (state) => state.search.current;
const popular = (state) => state.search.mostPopular;
const details = (state) => state.search.details;

export const getStatus = createSelector(search, (state) => state.status);
export const getVideos = createSelector(search, ({ videos }) => videos);
export const getQuery = createSelector(search, ({ query }) => query);
export const getNextPageToken = createSelector(
  search,
  ({ nextPageToken }) => nextPageToken
);
export const getPrevPageToken = createSelector(
  search,
  ({ prevPageToken }) => prevPageToken
);

export const getPopularVideos = createSelector(popular, ({ videos }) => videos);
export const getPopularNextPageToken = createSelector(
  popular,
  ({ nextPageToken }) => nextPageToken
);
export const getPopularPrevPageToken = createSelector(
  popular,
  ({ prevPageToken }) => prevPageToken
);

export const getVideo = createSelector(details, ({ data }) => data);
