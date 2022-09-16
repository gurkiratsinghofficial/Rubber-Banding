import React from "react";
import RBInput from "../../../shared/RBInput";

function LineItem({ lineItem }) {
  return (
    <div className="line-item">
      <span>
        HTS: <RBInput value={lineItem.hts} />
      </span>
      <span>
        TOTAL: <RBInput value={lineItem.total} />
      </span>
    </div>
  );
}

export default LineItem;
