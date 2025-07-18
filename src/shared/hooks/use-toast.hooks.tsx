import { toast, Bounce, ToastOptions } from 'react-toastify';

const useToast = () => {
  const showToast = (message: string, type: 'error' | 'success') => {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    };

    switch (type) {
      case 'error':
        toast.error(message, options);
        break;

      case 'success':
        toast.success(message, options);
        break;

      default:
        break;
    }
  };

  return [showToast];
};

export default useToast;
