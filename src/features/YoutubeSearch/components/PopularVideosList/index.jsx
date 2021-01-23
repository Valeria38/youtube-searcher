import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getQuery,
  getPopularVideos as getPopularVideosSelector,
  getPopularNextPageToken,
  getPopularPrevPageToken,
  getPopularStatus,
} from "../../selectors";

import { getPopularVideos } from "../../actions";

import Video from "../Video";
import Pagination from "../Pagination";
import StatusController from "../StatusController";

// import usePagination from "../../../../hooks/usePagination";

import "./styles.scss";

const PopularVideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const nextPageToken = useSelector(getPopularNextPageToken);
  const prevPageToken = useSelector(getPopularPrevPageToken);
  const popularVideos = useSelector(getPopularVideosSelector);
  const status = useSelector(getPopularStatus);

  useEffect(() => {
    // if (!query) {
    dispatch(getPopularVideos());
    // }
  }, [query]);

  const handlePrev = useCallback(
    (token) => {
      dispatch(getPopularVideos(token));
    },
    [getPopularVideos]
  );

  const handleNext = useCallback(
    (token) => {
      dispatch(getPopularVideos(token));
    },
    [getPopularVideos]
  );

  return (
    <StatusController status={status}>
      <div className="videos">
        {popularVideos.map((video, index) => (
          <Video withLink id={video.id} key={index} />
        ))}
      </div>
      <Pagination
        prevToken={prevPageToken}
        nextToken={nextPageToken}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </StatusController>
  );
};

export default PopularVideosList;
