import Button from '@/shared/components/button';

const EmptyCart = () => {
  return (
    <div className='min-h-[70vh] flex-center'>
      <div className='flex-center flex flex-col'>
        <div className='opacity-70 font-bold text-[18px]'>Cart is empty</div>
      </div>
    </div>
  );
};

export default EmptyCart;
