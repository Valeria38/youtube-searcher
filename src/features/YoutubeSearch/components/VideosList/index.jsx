import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getQuery,
  getVideos as getVideosSelector,
  getNextPageToken,
  getPrevPageToken,
  getStatus,
} from "../../selectors";

import { getVideos } from "../../actions";

import Video from "../Video";
import Pagination from "../Pagination";
import StatusController from "../StatusController";

import "./styles.scss";

const VideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const videos = useSelector(getVideosSelector);
  const nextPageToken = useSelector(getNextPageToken);
  const prevPageToken = useSelector(getPrevPageToken);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(getVideos(query));
  }, [query]);

  const handlePrev = useCallback(
    (token) => {
      dispatch(getVideos(query, token));
    },
    [getVideos, query]
  );

  const handleNext = useCallback(
    (token) => {
      dispatch(getVideos(query, token));
    },
    [getVideos, query]
  );

  return (
    <StatusController status={status}>
      <div className="videos">
        {videos.map((video, index) => (
          <Video withLink id={video.id.videoId} key={index} />
        ))}
      </div>
      <Pagination
        nextToken={nextPageToken}
        prevToken={prevPageToken}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </StatusController>
  );
};

export default VideosList;
