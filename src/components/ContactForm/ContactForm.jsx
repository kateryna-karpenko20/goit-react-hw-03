import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must not exceed 50 characters')
    .required('Number is required'),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" placeholder="Enter name" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" placeholder="Enter number" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
