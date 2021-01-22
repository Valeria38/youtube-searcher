import { Switch, Route, Redirect } from "react-router-dom";

import VideoDetails from "./components/VideoDetails";
import SearchVideos from "./components/SearchVideos";

const YoutubeSearch = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/videos" />
      </Route>
      <Route exact path="/videos" component={SearchVideos} />
      <Route exact path="/videos/:token" component={VideoDetails} />
    </Switch>
  );
};

export default YoutubeSearch;
