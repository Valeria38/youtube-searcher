import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import SearchInput from "./components/SearchInput";
import VideosList from "./components/VideosList";
import PopularVideosList from "./components/PopularVideosList";
import VideoDetails from "./components/VideoDetails";

import { getQuery } from "./selectors";

const YoutubeSearch = () => {
  const query = useSelector(getQuery);
  return (
    <>
      <Redirect to="/videos" />
      <Switch>
        <Route
          exact
          path="/videos"
          component={() => (
            <>
              <SearchInput />
              {query ? <VideosList /> : <PopularVideosList />}
            </>
          )}
        />
        <Route exact path="/videos/video/:token" component={VideoDetails} />
      </Switch>
    </>
  );
};

export default YoutubeSearch;
