import * as Yup from 'yup';

export const validationSchema = Yup.object({
    currency: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    expiryDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
});