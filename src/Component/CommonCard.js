import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { GetDiffrence, GetDiffrenceText } from "./TimeDiff";

const CommonCard = ({ orderDetails, updateState, orderType }) => {
  const orderTime = orderDetails.orderTime;  
  const minutes = GetDiffrence(orderTime)
  const minutesText = GetDiffrenceText(orderTime)
  const [timer, setTimer] = useState(minutes)
  const [timerText, setTimerText] = useState(minutesText)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(GetDiffrence(orderTime));
      setTimerText(GetDiffrenceText(orderTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, orderTime]);  
  const orderId = orderDetails.orderId;
  let style = {
    width: "12rem",
  }
  if (timer > 3) {
    style = {
      width: "12rem",
      backgroundColor: "red"
    }
  }
  return (
    <>
      <Card className="text-center mb-2" style={style}>
        <Card.Body>
          <Card.Title>Order Id: {orderDetails.orderIdView}</Card.Title>
          <Card.Text>Time: {timerText}</Card.Text>
          {orderType!=="" ? <Button onClick={() => updateState(orderId, orderType)} variant="light">
            Next
          </Button> : <Button variant="light">Picked</Button> }
        </Card.Body>
      </Card>
    </>
  );
};

export default CommonCard;
