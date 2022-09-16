import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoices } from "../../../utils/dummy";
import { setInvoiceData } from "../articleSlice";
import Invoice from "./Invoice";

function RBForm() {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.article.invoiceData);

  useEffect(() => {
    dispatch(setInvoiceData(invoices));
  }, [dispatch]);

  return (
    <div className="form">
      {invoiceData?.map((invoice, invoiceIndex) => (
        <Invoice key={invoiceIndex} invoice={invoice} />
      ))}
    </div>
  );
}

export default RBForm;
