import Button from '@/shared/components/button';

const DetailNotFound = () => {
  return (
    <div className='flex-center bg-neutral-0 border-neutral-100 rounded-[12px] p-4 min-h-[70vh]'>
      <div className='flex-center flex flex-col'>
        <div className='opacity-70 font-bold text-[18px]'>
          Product not found
        </div>
        <div className='mt-3'>
          <Button
            link='/'
            className='max-w-[250px] pl-[50px] pr-[20px]'
            iconPath='/icons/arrow-left.svg'
            btnType='secondary'
            value='Home page'
          />
        </div>
      </div>
    </div>
  );
};

export default DetailNotFound;
