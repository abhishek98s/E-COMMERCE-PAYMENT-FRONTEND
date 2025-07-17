import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { useEffect, useRef } from 'react';

type ProductSearchProps = {
  setSearchTitle: (title: string | null) => void;
};

const ProductSearch = ({ setSearchTitle }: ProductSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        inputRef.current.value.length > 0 &&
        !inputRef.current.contains(event.target as Node)
      ) {
        console.log(inputRef.current.value);
        inputRef.current.value = '';
        setSearchTitle(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='search-wrapper relative overflow-hidden rounded-[8px] max-w-[500px] w-full'>
      <input
        ref={inputRef}
        onChange={(e) => setSearchTitle(e.target.value)}
        type='text'
        placeholder='Search for a product'
        className='search-input p-[12px] pl-[48px]'
      />
      <div className='absolute top-1/2 left-0 -translate-y-1/2'>
        <button className='search-btn size-[48px] flex-center '>
          <ImageWrapper
            className='max-w-[24px] opacity-50'
            path='/icons/search.svg'
          />
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
