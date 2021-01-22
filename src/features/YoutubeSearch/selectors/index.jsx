import { createSelector } from "reselect";

const search = (state) => state.search.current;
const popular = (state) => state.search.mostPopular;

export const getStatus = createSelector(search, (state) => state.status);
export const getVideos = createSelector(search, ({ videos }) => videos);
export const getQuery = createSelector(search, ({ query }) => query);

export const getPopularVideos = createSelector(popular, ({ videos }) => videos);
