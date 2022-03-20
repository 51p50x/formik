import {Formik, Field, Form, ErrorMessage} from 'formik';
import Checkbox from './Components/Checkbox';
import TextInput from './Components/TextInput'
import Select from './Components/Select';

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
        <TextInput name = 'name' label = 'Name' />
        <br/>
        <Select label='select waifu' name = 'select'>
            <option value='default'>Default option</option>
            <option value='happy waifu'>happy waifu</option>
        </Select>
        <br/>
        <TextInput name = 'lastname' label = 'Lastname' />
        <br/>
        <TextInput name = 'email' label = 'Email' />
        <br/>
        <Checkbox name='accept'>
            Accept terms and conditions
        </Checkbox>
        <br/>
        <button type="submit">Sent</button>
      </Form>
    </Formik>
  );
}

export default App;
