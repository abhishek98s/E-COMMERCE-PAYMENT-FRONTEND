import Button from '../button';

type ErrorWrapperProps = {
  refetchData: () => void;
};

const ErrorWrapper = ({ refetchData }: ErrorWrapperProps) => {
  return (
    <>
      <div className='min-h-[50vh] bg-neutral-0 mt-4 rounded-[12px] flex-center'>
        <div className='flex-center flex flex-col'>
          <div className='text-[20px] opacity-80 font-bold'>We are having some trouble</div>
          <Button
            clickFunc={refetchData}
            value='Retry'
            className='max-w-[120px] mt-3'
          />
        </div>
      </div>
    </>
  );
};

export default ErrorWrapper;
