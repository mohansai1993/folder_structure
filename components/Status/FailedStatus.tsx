import React from "react";
import { MdOutlineCancel } from "react-icons/md";

function FailedStatus() {
  return (
    <div className="flex justify-center ">
      <MdOutlineCancel size={24} color={"#F44336"} />
    </div>
  );
}

export default FailedStatus;
