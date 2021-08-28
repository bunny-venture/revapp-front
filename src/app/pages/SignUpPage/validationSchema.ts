import * as Yup from 'yup';

const signUpValidationSchema = Yup.object({
  email: Yup.string().required().email().trim(),
  name: Yup.string().required().trim(),
  password: Yup.string()
    .required()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_@.-]{8,}$/,
      'at least one uppercase letter, and one number.',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is a required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_@.-]{8,}$/,
      'passwordAlphaNumeric',
    )
    .oneOf([Yup.ref('password'), null], 'Confirm Password not match'),
});

export default signUpValidationSchema;
