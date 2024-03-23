import React from "react";
import { Table } from "react-bootstrap";
import TableTr from "./TableTr";
import { useDispatch } from "react-redux";
import { updateOrder } from "../Redux/orderPizzaSlice";

const OrderTable = ({ getAllOrderDetails }) => {
  const dispatch = useDispatch()
  const cancelHandler = (orderId, currentState) => {
    dispatch(updateOrder({ orderId: orderId, currentState: currentState }));
  };
  return (
    <>
    {getAllOrderDetails.length > 0 &&
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Stage</th>
          <th>Total Time spend (time from order placed)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {getAllOrderDetails.map((orderDetails, index) => <TableTr key={index} orderDetails={orderDetails} cancelHandler={cancelHandler}/>)}
      </tbody>
    </Table>
}
    </>
  );
};

export default OrderTable;
