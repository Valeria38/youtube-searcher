import { createSelector } from "reselect";

const search = (state) => state.search;

export const getStatus = createSelector(search, (state) => state.status);
export const getVideos = createSelector(search, ({ videos }) => videos);
export const getQuery = createSelector(search, ({ query }) => query);
