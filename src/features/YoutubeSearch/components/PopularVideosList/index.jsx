import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getQuery,
  getPopularVideos as getPopularVideosSelector,
  getPopularNextPageToken,
  getPopularPrevPageToken,
} from "../../selectors";

import { getPopularVideos } from "../../actions";

import Video from "../Video";
import Pagination from "../Pagination";

// import usePagination from "../../../../hooks/usePagination";

import "./styles.scss";

const PopularVideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const nextPageToken = useSelector(getPopularNextPageToken);
  const prevPageToken = useSelector(getPopularPrevPageToken);
  const popularVideos = useSelector(getPopularVideosSelector);

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
    <>
      <div className="videos">
        {popularVideos.map((video, index) => (
          <Video id={video.id} key={index} />
        ))}
      </div>
      <Pagination
        prevToken={prevPageToken}
        nextToken={nextPageToken}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};

export default PopularVideosList;
