import Link from "next/link";

const btnStyle = {
  primary: 'bg-neutral-900 text-neutral-0',
  secondary: 'bg-neutral-50 text-neutral-600 border-neutral-100',
};

type ButtonProps = {
  value: string;
  btnType?: keyof typeof btnStyle;
  type?: 'button' | 'submit';
  className?: string;
  link?: string;
};

const Button = ({
  value,
  btnType = "primary",
  link = "#",
  className,
  type = 'button',
}: ButtonProps) => {
  return (
    <Link
      href={link}
      type={type}
      className={`${className} ${btnStyle[btnType]} inline-flex justify-center items-center w-full rounded-[8px] min-h-[44px] font-[600] text-[16px] tracking-[0.5px]`}
    >
      {value}
    </Link>
  );
};

export default Button;
