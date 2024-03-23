import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrder } from "../Redux/orderPizzaSlice";

const useOrderForm = (initialValues) => {
  const dispatch = useDispatch();
  const foundOrderSchema = yup.object({
    // orderId: yup.string().required("Please enter your Order Id"),
    type: yup.string().required("Please select type"),
    size: yup.string().required("Please select size"),
    base: yup.string().required("Please select base"),
  });
  const addOrderHandler = () => {
    let formData = new FormData();
    console.log(formData);
    dispatch(addOrder({ values: formData }));
    // .unwrap()
    // .then((res) => {
    //   if (res.status === 1) {
    //     toast.success(res.message, {
    //       className: "toast-message",
    //     });
    //     if (localstrorage===true) {
    //       localStorage.setItem(
    //           "user",
    //           JSON.stringify({
    //             data: JSON.stringify(res.data),
    //           })
    //         );
    //     }
    //   } else {
    //     toast.error(res.message, {
    //       className: "toast-message",
    //     });
    //   }
    // })
    // .catch((err) => {
    //   toast.error(`${err.message}`, {
    //     className: "toast-message",
    //   });
    // })
  };
  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: foundOrderSchema,
    onSubmit: addOrderHandler,
  });
  return {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
  };
};

export default useOrderForm;
