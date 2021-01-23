import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Video from "../../Common/Video";
import LikeVideoButton from "./components/LikeVideoButton";
import StatusController from "../../Common/StatusController";

import { getVideo } from "./actions";
import { setQuery } from "../SearchVideos/actions";

import {
  getVideo as getVideoSelector,
  getDetailsStatus,
  getError,
} from "./selectors";

import { formatDate } from "../../../helpers/formatDate";

import { ReactComponent as Like } from "../../../images/like.svg";
import { ReactComponent as Dislike } from "../../../images/dislike.svg";

import "./styles.scss";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const status = useSelector(getDetailsStatus);
  const { snippet, statistics } = useSelector(getVideoSelector);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getVideo(token));
  }, []);

  const searchByTag = (tag) => {
    dispatch(setQuery(tag));
  };

  return (
    <StatusController status={status} error={error}>
      <div className="video-details">
        <LikeVideoButton token={token} />
        <Video id={token} />
        <div>
          <div className="video-details--title">{snippet?.title}</div>
          <div>
            <div className="video-details--likes">
              <div>
                <Like className="video-details--icon" />
                {statistics?.likeCount}
              </div>
              <div>
                <Dislike className="video-details--icon" />
                {statistics?.dislikeCount}
              </div>
            </div>
          </div>
          <div className="video-details--info">
            {statistics?.viewCount} views
          </div>
          <div className="video-details--info">
            {statistics?.commentCount} comments
          </div>
          <div className="video-details--info">
            {formatDate(snippet?.publishedAt)}
          </div>
          {snippet?.tags?.map((tag) => (
            <Link to="/" key={tag}>
              <span
                onClick={() => searchByTag(tag)}
                className="video-details--tag"
              >
                #{tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </StatusController>
  );
};

export default VideoDetails;
