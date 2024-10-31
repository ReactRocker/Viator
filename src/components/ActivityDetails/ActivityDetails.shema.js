import * as Yup from "yup";

export const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    meetingPoint: Yup.string().required('Required'),
    tourLanguage: Yup.string().required('Required'),
});