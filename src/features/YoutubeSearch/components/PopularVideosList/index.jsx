import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getQuery,
  getPopularVideos as getPopularVideosSelector,
} from "../../selectors";

import { getPopularVideos } from "../../actions";

import Video from "../Video";

import "./styles.scss";

const PopularVideosList = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);
  const popularVideos = useSelector(getPopularVideosSelector);

  useEffect(() => {
    // if (!query) {
    dispatch(getPopularVideos());
    // }
  }, [query]);

  return (
    <div className="videos">
      {popularVideos.map((video, index) => (
        <Video id={video.id} key={index} />
      ))}
    </div>
  );
};

export default PopularVideosList;
