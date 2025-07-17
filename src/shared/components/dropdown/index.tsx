import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { useEffect, useRef, useState } from 'react';

type DropdownProps = {
  defaultOption: string;
  dropdownList: string[];
  onListClick: (category: string) => void;
};

const Dropdown = ({
  defaultOption,
  dropdownList,
  onListClick,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);

  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName === 'LI') {
      if (target.textContent) {
        onListClick(target.textContent || 'default');
        setSelectedOption(target.textContent);
        toggleDropdown();
      }
    }
  };

  return (
    <div className="relative min-w-[200px]" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="bg-neutral-100 rounded-[8px] flex justify-between items-center min-h-[48px] px-[12px] text-neutral-700 cursor-context-menu"
      >
        <span>{selectedOption}</span>

        <div className="absolute size-[48px] flex-center right-0 top-0">
          <ImageWrapper className="max-w-[20px]" path="icons/arrow-down.svg" />
        </div>
      </div>

      {isDropDownOpen && (
        <div className="animation-scale-down absolute z-10 left-0 right-0 top-full p-2 mt-1 border-neutral-200 rouned-[8px] bg-neutral-0 shadow-lg">
          <ul onClick={handleClick} className="space-y-[2px] color-neutral-600">
            {dropdownList.length &&
              dropdownList.map((category: string, index: number) => (
                <li
                  key={`${category}_${index}`}
                  className="p-[8px] hover:bg-neutral-100 cursor-pointer"
                >
                  {category}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
