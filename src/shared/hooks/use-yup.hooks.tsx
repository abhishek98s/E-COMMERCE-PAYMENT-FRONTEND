import * as Yup from 'yup';
import useToast from './use-toast.hooks';

const useYup = <S extends Yup.AnyObject>() => {
    const [showToast] = useToast();
    const validate = (schema: Yup.ObjectSchema<S>, credentials: any) => {
        try {
            schema.validateSync(credentials, { abortEarly: false });
            return { success: true, errors: [] };
        } catch (error: any) {
            showToast(error.inner[0].message, 'error');
            return { success: false, errors: error.inner };
        }
    }
    return {
        validate,
    }
}

export default useYup;