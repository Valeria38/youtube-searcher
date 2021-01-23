import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import search from "./features/YoutubeSearch/SearchVideos/reducers";
import details from "./features/YoutubeSearch/VideoDetails/reducers";

const rootReducer = combineReducers({
  search,
  details,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
