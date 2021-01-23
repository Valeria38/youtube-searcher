import { Link } from "react-router-dom";

import { statuses } from "../../../constants";

import Loader from "../Loader";

import { ReactComponent as NoData } from "../../../images/noData.svg";
import { ReactComponent as Error } from "../../../images/error.svg";

import "./styles.scss";

const StatusController = ({ status, children, error }) => {
  const renderSwitch = () => {
    switch (status) {
      case statuses.success:
        return <div>{children}</div>;
      case statuses.loading:
        return <Loader />;
      case statuses.error:
        return (
          <div className="error">
            <Error className="empty-icon" />
            {error}
            <Link className="error-link" to="/">
              Go back home
            </Link>
          </div>
        );
      case statuses.empty:
      default:
        return (
          <div className="no-data">
            No data.
            <NoData className="empty-icon" />
          </div>
        );
    }
  };
  return <div className="status-controller">{renderSwitch()}</div>;
};

export default StatusController;
