import useToast from "./use-toast.hooks";
import * as Yup from 'yup';

const useYup = <S extends Yup.AnyObject>() => {
    const [showToast] = useToast();

    const validate = (schema: Yup.ObjectSchema<S>, credentials: any) => {
        try {
            schema.validateSync(credentials, { abortEarly: false })
        } catch (error: any) {
            showToast(error.inner[0].message, 'error');
        }
    }
    return {
        validate,
    }
}

export default useYup;