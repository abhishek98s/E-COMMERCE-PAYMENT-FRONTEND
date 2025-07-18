const ProductLoader = () => {
  const arr = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {arr.map((p: number, index) => (
        <div
          key={index}
          className='skeletion-wrapper bg-neutral-0 border-neutral-200 rounded-[8px] p-3 pb-3'
        >
          <div className='min-h-[184px] bg-neutral-200 rounded-[8px]'></div>

          <div className='category mt-3 max-w-[100px] min-h-[28px] rounded-full'></div>

          <div className='title mt-2 bg-neutral-200 min-h-[38px]'></div>

          <div className='flex items-center gap-[8px] mt-2 no-bg bg-neutral-0'>
            <div className='max-w-[24px] w-full min-h-[24px]'></div>
            <div className='rating leading-none w-full max-w-[120px] min-h-[24px]'></div>
          </div>

          <div className='price mt-3 max-w-[100px] min-h-[33px]'></div>
        </div>
      ))}
    </>
  );
};

export default ProductLoader;
