import { statuses } from "../../../../constants";

import Loader from "../Loader";

import { ReactComponent as NoData } from "../../../../images/noData.svg";

import "./styles.scss";

const StatusController = ({ status, children }) => {
  const renderSwitch = () => {
    switch (status) {
      case statuses.success:
        return <div>{children}</div>;
      case statuses.loading:
        return <Loader />;
      case statuses.error:
        return <span>Error</span>;
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
