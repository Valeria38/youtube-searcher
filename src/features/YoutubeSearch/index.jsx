import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import SearchInput from "./components/SearchInput";
import VideosList from "./components/VideosList";
import PopularVideosList from "./components/PopularVideosList";
import VideoDetails from "./components/VideoDetails";
import Container from "./components/Container";

import { getQuery } from "./selectors";

const YoutubeSearch = () => {
  const query = useSelector(getQuery);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/videos" />
        </Route>
        <Route
          exact
          path="/videos"
          component={() => (
            <Container>
              <SearchInput />
              {query ? <VideosList /> : <PopularVideosList />}
            </Container>
          )}
        />
        <Route exact path="/videos/:token" component={VideoDetails} />
      </Switch>
    </>
  );
};

export default YoutubeSearch;
