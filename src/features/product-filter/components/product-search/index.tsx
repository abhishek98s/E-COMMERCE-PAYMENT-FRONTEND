import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { useRef } from 'react';

type ProductSearchProps = {
  setSearchTitle: (title: string | null) => void;
};

const ProductSearch = ({ setSearchTitle }: ProductSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleResetBtn = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setSearchTitle(null);
    }
  };

  return (
    <div className="search-wrapper relative overflow-hidden rounded-[8px] max-w-[500px] w-full">
      <input
        ref={inputRef}
        onChange={(e) => setSearchTitle(e.target.value)}
        type="text"
        placeholder="Search for a product"
        className="search-input p-[12px] pl-[48px]"
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <button className="search-btn size-[48px] flex-center ">
          <ImageWrapper
            className="max-w-[24px] opacity-50"
            path="/icons/search.svg"
          />
        </button>
      </div>
      {inputRef.current && inputRef.current.value.length > 0 && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <button
            onClick={handleResetBtn}
            className="search-btn size-[48px] flex-center "
          >
            <ImageWrapper
              className="max-w-[24px] opacity-50"
              path="/icons/close.svg"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
