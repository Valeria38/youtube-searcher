import { useState } from "react";

import { ReactComponent as Heart } from "../../../../../images/heart.svg";
import { ReactComponent as OutlinedHeart } from "../../../../../images/outlinedHeart.svg";

import "./styles.scss";

const LikeVideoButton = ({ token }) => {
  const [isLiked, setIsLiked] = useState(!!localStorage.getItem(token));

  const toggleLike = () => {
    const item = localStorage.getItem(token);
    localStorage.setItem(token, item ? "" : "liked");
    setIsLiked(!isLiked);
  };

  return isLiked ? (
    <Heart className="like-icon" onClick={toggleLike} />
  ) : (
    <OutlinedHeart className="like-icon" onClick={toggleLike} />
  );
};

export default LikeVideoButton;
