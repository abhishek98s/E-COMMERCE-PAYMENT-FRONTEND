import { IProduct } from '@/shared/types/products.types';
import { Dispatch, SetStateAction, useMemo } from 'react';

type PaginationProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  allProducts: IProduct[];
  itemPerPage: number;
};

const Pagination = ({
  currentPage,
  allProducts,
  itemPerPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPage = useMemo(() => {
    return Math.ceil(allProducts.length / itemPerPage);
  }, [allProducts, itemPerPage]);

  const pages = [...Array(totalPage)].map((a, i) => i + 1);

  const onBtnClick = (num: number) => {
    if (
      (num < 0 && currentPage === 1) ||
      (num > 0 && currentPage === totalPage)
    ) {
      return;
    }
    setCurrentPage((prev) => prev + num);
  };

  if (!totalPage) {
    return null;
  }
  return (
    <div className='pagination-wrapper mx-auto flex-center gap-[12px] my-4'>
      <button
        onClick={() => onBtnClick(-1)}
        disabled={currentPage === 1 ? true : false}
        className={`${currentPage === 1 ? 'opacity-20' : 'cursor-pointer'} prev flex-center rounded-[8px] px-3 min-h-[44px] bg-neutral-0 border-neutral-200`}
      >
        Previous
      </button>

      <div className='flex gap-[8px] flex-center'>
        {totalPage &&
          pages.map((page: number) => (
            <a
              href='#'
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`${currentPage === page ? 'font-bold size-[48px]' : ''} size-[44px] flex-center text-[16px] bg-neutral-0 border-neutral-200 rounded-[8px] shadow-sm `}
            >
              {page}
            </a>
          ))}
      </div>

      <button
        onClick={() => onBtnClick(1)}
        disabled={currentPage === totalPage ? true : false}
        className={`${currentPage === totalPage ? 'opacity-20' : 'cursor-pointer'} next flex-center rounded-[8px] px-3 min-h-[44px] bg-neutral-0 border-neutral-200`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
