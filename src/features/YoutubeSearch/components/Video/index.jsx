import { Link } from "react-router-dom";

import "./styles.scss";

const Video = ({ id, customStyles, withLink = false }) => {
  return id ? (
    <div className="video-wrapper">
      <iframe
        className="video"
        style={customStyles}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={id}
      ></iframe>
      {withLink && (
        <Link className="video--link" to={`/videos/${id}`}>
          Go to details page
        </Link>
      )}
    </div>
  ) : null;
};

export default Video;
