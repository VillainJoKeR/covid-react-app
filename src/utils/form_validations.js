import isEmail from 'sane-email-validation'

//*************************************************
// Form validations used in redux-form
//**************************************************

// is required?
const required = (value) => ((value || value === 0) ? undefined : 'Required')

// is email valid?
// Note: throw error only if there is a value and its not an email
const email = (value = '') => value ? (isEmail(value) ? undefined : 'Invalid email') : undefined

const formValidations = {
  required,
  email
}

export default formValidations
