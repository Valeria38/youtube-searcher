import { createSelector } from "reselect";

const details = (state) => state.details;

export const getVideo = createSelector(details, ({ data }) => data);
export const getDetailsStatus = createSelector(details, ({ status }) => status);
export const getError = createSelector(details, ({ error }) => error);
