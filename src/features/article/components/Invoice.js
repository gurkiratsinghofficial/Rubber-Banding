import React from "react";
import LineItem from "./LineItem";

function Invoice({ invoice }) {
  return (
    <div className="invoice">
      <spam className="invoice-id">Invoice: {invoice.id}</spam>
      <div>
        {invoice.lineItems.map((lineItem, lineItemIndex) => (
          <LineItem key={lineItemIndex.id} lineItem={lineItem} />
        ))}
      </div>
    </div>
  );
}

export default Invoice;
