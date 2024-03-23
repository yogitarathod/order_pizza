import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import useOrderForm from "../Hooks/useOrderForm";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { addOrder } from "../Redux/orderPizzaSlice";
import { useNavigate } from "react-router-dom";

const AddForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const foundOrderSchema = yup.object({
    // orderId: yup.string().required("Please enter your Order Id"),
    type: yup.string().required("Please select type"),
    size: yup.string().required("Please select size"),
    base: yup.string().required("Please select base"),
  });
  const addOrderHandler = (values) => {
    dispatch(addOrder({ values: values }));
    resetForm();
    navigate("/");
  };  
  let defaultInitialValues = {
    type: "",
    size: "",
    base: "",
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: defaultInitialValues,
    enableReinitialize: true,
    validationSchema: foundOrderSchema,
    onSubmit: addOrderHandler,
  });
  return (
    <Container className="mt-5">
      <h1>Buy Pizza</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Type</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select type"
                name="type"
                value={values.type}
                className="form-control"
                onChange={handleChange}
                // style={style}
              >
                <option value="">Select Type</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </Form.Select>
              {errors.type && (
                <Alert key="danger" variant="danger">
                  {errors.type}
                </Alert>
              )}
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Size</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="size"
                value={values.size}
                className="form-control"
                onChange={handleChange}
                // style={style}
              >
                <option value="">Select Type</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
              </Form.Select>
              {errors.size && (
                <Alert key="danger" variant="danger">
                  {errors.size}
                </Alert>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Base</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="base"
                value={values.base}
                className="form-control"
                onChange={handleChange}
                // style={style}
              >
                <option value="">Select base</option>
                <option value="Thick">Thick</option>
                <option value="Thin">Thin</option>
              </Form.Select>
            </Form.Group>
            {errors.base && (
              <Alert key="danger" variant="danger">
                {errors.base}
              </Alert>
            )}
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddForm;
