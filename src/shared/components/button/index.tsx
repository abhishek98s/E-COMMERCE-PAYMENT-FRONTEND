import Link from 'next/link';
import ImageWrapper from '../img-wrapper/img-wrapper.component';

const btnStyle = {
  primary: 'btn-primary bg-neutral-900 text-neutral-0',
  secondary:
    'btn-secondary bg-neutral-50 hover:bg-neutral-100 text-neutral-700 opacity-90 border-neutral-100',
};

type ButtonProps = {
  value: string;
  btnType?: keyof typeof btnStyle;
  type?: 'button' | 'submit';
  className?: string;
  link?: string;
  alignLeft?: boolean;
  iconPath?: string;
  clickFunc?: () => void;
};

const Button = ({
  value,
  btnType = 'primary',
  type = 'button',
  className,
  link = '#',
  alignLeft = false,
  iconPath = '',
  clickFunc,
}: ButtonProps) => {
  return (
    <Link
      href={link}
      type={type}
      onClick={clickFunc}
      className={`${className} ${btnStyle[btnType]} ${alignLeft ? '' : 'justify-center'} btn relative inline-flex items-center w-full rounded-[8px] min-h-[44px] font-[600] text-[16px] tracking-[0.5px]`}
    >
      {iconPath && (
        <div className='arrow-icon absolute top-1/2 left-[16px] -translate-y-1/2'>
          <ImageWrapper path={iconPath} className='max-w-[20px]' />
        </div>
      )}
      {value}
    </Link>
  );
};

export default Button;
