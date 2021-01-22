import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getQuery,
  getVideos as getVideosSelector,
  getNextPageToken,
  getPrevPageToken,
} from "../../selectors";

import { getVideos } from "../../actions";

import Video from "../Video";
import Pagination from "../Pagination";

import "./styles.scss";

const VideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const videos = useSelector(getVideosSelector);
  const nextPageToken = useSelector(getNextPageToken);
  const prevPageToken = useSelector(getPrevPageToken);

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
    <>
      <div className="videos">
        {videos.map((video, index) => (
          <Video id={video.id.videoId} key={index} />
        ))}
      </div>
      <Pagination
        nextToken={nextPageToken}
        prevToken={prevPageToken}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default VideosList;
