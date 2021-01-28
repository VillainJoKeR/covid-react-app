import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send'
import formValidations from '../../utils/form_validations';
import styles from './contact-form.module.scss';

const { required, email } = formValidations

// Input Structure definition to be used in Contact Form
const inputs = [{
  name: 'firstName',
  label: 'First Name',
  validate: required,
}, {
  name: 'lastName',
  label: 'Last Name',
  validate: required,
}, {
  name: 'email',
  label: 'Email',
  validate: [required, email],
}]

const RenderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const ContactForm = ({ onSubmit, handleSubmit }) => {
  const [submitted, setSubmitted] = React.useState(false)

  // log submitted ContactForm
  const submitContactForm = (results) => {
    console.log(results)
    
    setSubmitted(!submitted)
  }

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <Grid container justify='flex-start' alignItems='center' spacing={4}>
      {
        inputs.map((inputProps, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Box className={styles.formInputContainer}>
              <Field {...inputProps} component={RenderTextField} fullWidth variant='filled' className={styles.formInputContainer__formInput} />
            </Box>
          </Grid>
        ))
      }
      </Grid>

      <Grid container justify='flex-end' alignItems='center' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Button color='primary' type='submit' classes={{
            root: `${styles.submitButton} ${submitted ? styles.submitButton_m_success : ''}`
          }} variant='contained' endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default reduxForm({
  form: 'ContactForm'
})(ContactForm)
