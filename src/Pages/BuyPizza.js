import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../Component/AddForm";
import StopOrder from "../Component/StopOrder";

const BuyPizza = (props) => {
  // const dispatch = useDispatch();

  const getAllOrder = useSelector((state) => state?.order);
  console.log(getAllOrder);
  const currentOrder = getAllOrder?.currentOrder;
  // if (Object.keys(singleUser).length > 0 && id !== undefined && id !== null) {
  //     defaultInitialValues = {
  //       name: singleUser?.name,
  //       email: singleUser?.email,
  //       password: decryptVal(singleUser?.password),
  //       type: singleUser?.type,
  //       profile_path: singleUser?.profile_path,
  //     };
  //   }

  return (
    <>
      {currentOrder < 10 && <AddForm />}
      {currentOrder >= 10 && <StopOrder />}
    </>
  );
};

export default BuyPizza;
