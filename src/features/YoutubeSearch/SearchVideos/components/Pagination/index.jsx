import { useCallback } from "react";
import classNames from "classnames";

import { ReactComponent as ArrowRight } from "../../../../../images/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../../../../images/arrowLeft.svg";

import "./styles.scss";

const Pagination = ({ prevToken, nextToken, onPrev, onNext }) => {
  const handlePrev = useCallback(() => {
    onPrev(prevToken);
  }, [onPrev, prevToken]);

  const handleNext = useCallback(() => {
    onNext(nextToken);
  }, [onNext, nextToken]);

  return (
    <div className="pagination">
      <ArrowLeft
        onClick={handlePrev}
        className={classNames("pagination--icon", { disabled: !prevToken })}
      />
      <ArrowRight
        onClick={handleNext}
        className={classNames("pagination--icon", { disabled: !nextToken })}
      />
    </div>
  );
};

export default Pagination;
