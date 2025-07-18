const DetailLoader = () => {
  return (
    <div className='skeletion-wrapper bg-neutral-0 border-neutral-100 rounded-[12px] p-4'>
      <div className='max-w-[200px] w-full min-h-[40px]'></div>
      <div className='no-bg grid grid-cols-1 md:grid-cols-12 gap-5 mt-3'>
        <div className='relative w-full col-span-6 border-neutral-200 min-h-[400px]'></div>
        <div className='no-bg detail-wrapper col-span-6'>
          <div className='category mt-3 min-h-[30px] max-w-[120px] w-full rounded-full'></div>

          <div className='mt-3 min-h-[30px] w-[80%]'></div>
          <div className='mt-1 min-h-[30px] w-[20%]'></div>

          <div className='mt-4 min-h-[26px] w-full'></div>
          <div className='mt-2 min-h-[26px] w-[50%]'></div>

          <div className='min-h-[40px] max-w-[100px] w-full mt-4'></div>

          <div className='min-h-[44px] max-w-[150px] w-full mt-[40px]'></div>
        </div>
      </div>
    </div>
  );
};

export default DetailLoader;
