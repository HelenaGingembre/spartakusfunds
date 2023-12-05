import { useState, useRef } from "react";
import PropTypes from "prop-types";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { BoxError, BtnForm } from "../../views/ContactView/ContactView.style";

const FormContact = () => {
  const [disabled, setDisabled] = useState(false);
  const form = useRef();

  const sendDataToEmailApi = async (data) => {
    const { firstName, lastName, email, message } = data;

    /*EMAILJS KEYS ----------*/
    const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_ID } =
      process.env;

    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        firstName,
        lastName,
        email,
        message,
      };

      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_PUBLIC_ID
      );

      toast.info(
        `Hello ${firstName} ${lastName} Your email with the  message -  has been sent. Wait for the answer in the near future`
      );
    } catch (error) {
      // console.log(error);
      // Display error alert
      toast.error(`Error! Uh oh. Something went wrong. `);
    } finally {
      // Re-enable form submission
      setDisabled(false);
    }
  };

  const onHandleSubmit = async (values, { resetForm }) => {
    const emailWasSent = await sendDataToEmailApi(values);
    if (emailWasSent) {
      // Reset contact form fields after submission
      resetForm();
    }
  };

  const validationContactSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(70, "Must be 70 characters or less")
      .required("First Name is required")
      .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string()
      .min(7, "More details are always helpful.")
      .max(500, "Must be 500 characters or less")
      .required("Message is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
      validationSchema={validationContactSchema}
      validateOnChange={false}
      onSubmit={onHandleSubmit}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit} ref={form} className="contact-form">
          <Field
            type="text"
            label="First Name"
            placeholder="Enter First Name"
            name="firstName"
            onChange={props.handleChange}
            value={props.values.firstName}
          ></Field>
          <ErrorMessage
            name="firstName"
            render={(msg) => <BoxError>{msg}</BoxError>}
          />
          <Field
            type="text"
            label="Last Name"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={props.handleChange}
            value={props.values.lastName}
          ></Field>
          <ErrorMessage
            name="lastName"
            render={(msg) => <BoxError>{msg}</BoxError>}
          />
          <Field
            type="email"
            label="Email Address"
            placeholder="Enter email"
            name="email"
            onChange={props.handleChange}
            value={props.values.email}
          ></Field>
          <ErrorMessage
            name="email"
            render={(msg) => <BoxError>{msg}</BoxError>}
          />
          <Field
            as="textarea"
            label="Message"
            placeholder="Enter text"
            name="message"
            onChange={props.handleChange}
            value={props.values.message}
          ></Field>
          <ErrorMessage
            name="message"
            render={(msg) => <BoxError>{msg}</BoxError>}
          />

          <BtnForm type="submit" disabled={disabled}>
            Submit
          </BtnForm>

          <ToastContainer
            autoClose={5000}
            closeOnClick
            pauseOnHover
            theme="colored"
          />
        </Form>
      )}
    </Formik>
  );
};
export default FormContact;

FormContact.propType = {
  value: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
};
