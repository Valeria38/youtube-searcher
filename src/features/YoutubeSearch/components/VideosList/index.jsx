import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getQuery, getVideos as getVideosSelector } from "../../selectors";

import { getVideos } from "../../actions";

import Video from "../Video";

import "./styles.scss";

const VideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const videos = useSelector(getVideosSelector);

  useEffect(() => {
    dispatch(getVideos(query));
  }, [query]);

  return (
    <div className="videos">
      {videos.map((video, index) => (
        <Video id={video.id.videoId} key={index} />
      ))}
    </div>
  );
};

export default VideosList;
