import FailedStatus from "./FailedStatus";
import PendingStatus from "./PendingStatus";
import SuccessStatus from "./SuccessStatus";

function Status(status: string) {
  switch (status) {
    case "pending":
      return <PendingStatus />;
    case "failed":
      return <FailedStatus />;
    case "success":
      return <SuccessStatus />;
  }
}

export default Status;
