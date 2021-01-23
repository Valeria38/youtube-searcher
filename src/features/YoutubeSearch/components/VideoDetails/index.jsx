import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Video from "../Video";
import LikeVideoButton from "../LikeVideoButton";
import StatusController from "../StatusController";

import { getVideo } from "../../actions";

import {
  getVideo as getVideoSelector,
  getDetailsStatus,
} from "../../selectors";

import { formatDate } from "../../../../helpers/formatDate";

import { ReactComponent as Like } from "../../../../images/like.svg";
import { ReactComponent as Dislike } from "../../../../images/dislike.svg";

import "./styles.scss";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const status = useSelector(getDetailsStatus);
  const { snippet, statistics } = useSelector(getVideoSelector);

  useEffect(() => {
    dispatch(getVideo(token));
  }, []);

  return snippet && statistics ? (
    <StatusController status={status}>
      <div className="video-details">
        <LikeVideoButton token={token} />
        <Video id={token} />
        <div>
          <div className="video-details--title">{snippet.title}</div>
          <div>
            <div className="video-details--likes">
              <div>
                <Like className="video-details--icon" />
                {statistics.likeCount}
              </div>
              <div>
                <Dislike className="video-details--icon" />
                {statistics.dislikeCount}
              </div>
            </div>
          </div>

          <div className="video-details--info">
            {statistics.viewCount} views
          </div>
          <div className="video-details--info">
            {statistics.commentCount} comments
          </div>

          <div className="video-details--info">
            {formatDate(snippet.publishedAt)}
          </div>
          {snippet.tags.map((tag) => (
            <span className="video-details--tag" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </StatusController>
  ) : null;
};

export default VideoDetails;
