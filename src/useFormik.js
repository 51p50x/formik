import {useFormik} from 'formik'

const validate = (values) =>{
  const errors = {}
  
  if(!values.name){
    errors.name = 'Name is required'
  } else if (values.name.length < 5){
    errors.name = 'Name is too short'
  }
  
  if(!values.lastname){
    errors.lastname = 'Lastname is required'
  } else if (values.lastname.length < 5){
    errors.lastname = 'Lastname is too short'
  }
  
  return errors
}

function App() {
  const formik = useFormik({
    initialValues:{
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name? 
        <div>{formik.errors.name}</div> : null}
        <label>Lastname</label>
        <input
          type='text'
          {...formik.getFieldProps('lastname')}
        />
        {formik.touched.lastname && formik.errors.lastname?
         <div>{formik.errors.lastname}</div> : null}
        <label>Email</label>
        <input
          type='email'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email? 
        <div>{formik.errors.email}</div> : null}
        <button type='submit'>Sent</button>
      </form>
  );
}

export default App;
