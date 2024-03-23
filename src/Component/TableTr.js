import React, { useEffect, useState } from "react";
import { GetDiffrence, GetDiffrenceText } from "./TimeDiff";
import { Button } from "react-bootstrap";

const TableTr = ({ orderDetails, cancelHandler }) => {
  const minutes = GetDiffrence(orderDetails.orderTotalTime)
  const [timer, setTimer] = useState(minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(GetDiffrenceText(orderDetails.orderTotalTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, orderDetails.orderTotalTime]);
  let cancelButton = '';
  if (orderDetails.orderType === "Order Placed" || orderDetails.orderType === "Order in Making") {
    cancelButton = <Button onClick={() => cancelHandler(orderDetails.orderId, 'Cancelled')} variant="light" style={{ border: "black" }}>Cancel</Button>
  }
  return (
    <>
      <tr>
        <td>Order Id: {orderDetails.orderIdView}</td>
        <td>{orderDetails.orderType}</td>
        <td>{timer}</td>
        <td>{cancelButton}</td>
      </tr>
    </>
  );
};

export default TableTr;
