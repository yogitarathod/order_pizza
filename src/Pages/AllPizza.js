import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonCard from "../Component/CommonCard";
import { updateOrder } from "../Redux/orderPizzaSlice";
import OrderTable from "../Component/OrderTable";

const AllPizza = () => {
  const dispatch = useDispatch();
  const getAllOrderDetails = useSelector((state) => state?.order?.orderDetails);
  const updateState = (orderId, currentState) => {
    dispatch(updateOrder({ orderId: orderId, currentState: currentState }));
  };
  return (
    <>
      <div>
        <Container className="mt-5">
          <h1>Orders with stages</h1>
          <Row>
            <Link to="/add-pizza">Order Pizza</Link>
          </Row>
          <Row>
            <Col>
              <h3>Order Placed</h3>
              {getAllOrderDetails.map((orderDetails, index) => {
                return (
                  orderDetails.orderType === "Order Placed" && (
                    <CommonCard key={index}
                      orderDetails={orderDetails} updateState={updateState} orderType="Order in Making"
                    />
                  )
                );
              })}
            </Col>
            <Col>
              <h3>Order in Making</h3>
              {getAllOrderDetails.map((orderDetails, index) => {
                return (
                  orderDetails.orderType === "Order in Making" && (
                    <CommonCard key={index}
                      orderDetails={orderDetails} updateState={updateState} orderType="Order Ready"
                    />
                  )
                );
              })}
            </Col>
            <Col>
              <h3>Order Ready</h3>
              {getAllOrderDetails.map((orderDetails, index) => {
                return (
                  orderDetails.orderType === "Order Ready" && (
                    <CommonCard key={index}
                      orderDetails={orderDetails} updateState={updateState} orderType="Order Picked"
                    />
                  )
                );
              })}
            </Col>
            <Col>
              <h3>Order Picked</h3>
              {getAllOrderDetails.map((orderDetails, index) => {
                return (
                  orderDetails.orderType === "Order Picked" && (
                    <CommonCard key={index}
                      orderDetails={orderDetails} updateState={updateState} orderType=""
                    />
                  )
                );
              })}
            </Col>
          </Row>
          <Row>
              <OrderTable getAllOrderDetails={getAllOrderDetails}/>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllPizza;
