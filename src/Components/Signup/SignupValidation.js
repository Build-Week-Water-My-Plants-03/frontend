import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
            .string()
            .trim()
            .required('Username is required'),
        password: yup
            .string()
            .trim()
            .required('Password is required'),
        phone: yup
            .string()
            .trim()
            .required('Please enter valid number')
})

export default formSchema;