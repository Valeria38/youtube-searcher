import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Video from "../Video";

import { getVideo } from "../../actions";

import { getVideo as getVideoSelector } from "../../selectors";

import "./styles.scss";

const styles = {
  width: "550px",
};

const VideoDetails = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const { snippet } = useSelector(getVideoSelector);

  useEffect(() => {
    dispatch(getVideo(token));
  }, []);

  return snippet ? (
    <div className="video-details">
      <Video id={token} customStyles={styles} />
      <div>Channel:{snippet.channelTitle}</div>
      <div>{snippet.title}</div>
      <div>{snippet.description}</div>
      {snippet.tags.map((tag) => (
        <span className="video-details--tag">#{tag}</span>
      ))}
    </div>
  ) : null;
};

export default VideoDetails;
