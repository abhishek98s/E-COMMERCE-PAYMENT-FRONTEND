'use client';

import Button from '@/shared/components/button';

export default function Error() {
  return (
    <div className='min-h-[50vh] bg-neutral-0 mt-4 rounded-[12px] flex-center'>
      <div className='flex-center flex flex-col'>
        <div className='text-[20px] opacity-80 font-bold'>
          Something's Wrong
        </div>
        <Button link='/' value='Back to Home' className='max-w-[150px] mt-3' />
      </div>
    </div>
  );
}
