import { Switch, Route } from "react-router-dom";

import VideoDetails from "./VideoDetails";
import SearchVideos from "./SearchVideos";

const YoutubeSearch = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchVideos} />
      <Route exact path="/videos/:token" component={VideoDetails} />
    </Switch>
  );
};

export default YoutubeSearch;
