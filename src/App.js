import {Formik, Field, Form, ErrorMessage} from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 5) {
    errors.name = 'Name is too short';
  }

  if (!values.lastname) {
    errors.lastname = 'Lastname is required';
  } else if (values.lastname.length < 5) {
    errors.lastname = 'Lastname is too short';
  }

  return errors;
};

function App () {
  return (
    <Formik
      initialValues={{name: '', lastname: '', email: ''}}
      validate={validate}
      onSubmit={values => console.log (values)}
    >
      <Form>
        <label>Name</label>
        <Field name = 'name' type = 'text' />
        <ErrorMessage name = 'name' />
        <label>Lastname</label>
        <Field name = 'lastname' type = 'text' />
        <ErrorMessage name = 'lastname' />
        <label>Email</label>
        <Field name = 'email' type = 'email' />
        <ErrorMessage name = 'email' />
        <button type="submit">Sent</button>
      </Form>
    </Formik>
  );
}

export default App;
