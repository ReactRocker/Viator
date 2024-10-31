import * as Yup from "yup";
import {useSelector} from "react-redux";
export const validationSchema = (isLoggedIn, mode) => Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    phoneNumber: Yup.string().required('Please enter your mobile number'),
    ...(!isLoggedIn && mode === 'create' && {
        password: Yup.string().required('Please enter your password'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please enter your password again'),
    }),
});