import {Formik, Field, Form, ErrorMessage} from 'formik';
import Checkbox from './Components/Checkbox';
import TextInput from './Components/TextInput'
import Select from './Components/Select';
import Radio from './Components/Radio';

//un comentario

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

  if(!values.radio){
    errors.radio = 'Required'
  }

  return errors;
};

function App () {
  return (
    <Formik
      initialValues={{name: '', lastname: '', email: '', select:'default', accept:false, radio:''}}
      validate={validate}
      onSubmit={values => console.log (values)}
    >
      <Form>
        <TextInput name = 'name' label = 'Name' />
        <br/>
        <TextInput name = 'lastname' label = 'Lastname' />
        <br/>
        <TextInput name = 'email' label = 'Email' />
        <br/>
        <Select label='select waifu' name = 'select'>
            <option value='default'>Default option</option>
            <option value='happy waifu'>happy waifu</option>
        </Select>
        <br/>
        <Checkbox name='accept'>
            Accept terms and conditions
        </Checkbox>
        <br/>
        <Radio name ='radio' label = 'waifu 1' value='waifu1'/>
        <Radio name ='radio' label = 'waifu 2' value='waifu2'/>
        <Radio name ='radio' label = 'waifu 3' value='waifu3'/>
        <ErrorMessage name ='radio' />
        <br/>
        <button type="submit">Sent</button>
      </Form>
    </Formik>
  );
}

export default App;
